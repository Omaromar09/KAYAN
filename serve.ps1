# KAYAN Atelier Local Web Server
$port = 8080
$prefix = 'http://localhost:' + $port + '/'
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host ('KAYAN Atelier server running at ' + $prefix) -ForegroundColor Green

    $mimeTypes = @{
        '.html' = 'text/html; charset=utf-8'
        '.css'  = 'text/css; charset=utf-8'
        '.js'   = 'application/javascript; charset=utf-8'
        '.json' = 'application/json; charset=utf-8'
        '.svg'  = 'image/svg+xml'
        '.png'  = 'image/png'
        '.jpg'  = 'image/jpeg'
        '.jpeg' = 'image/jpeg'
        '.webp' = 'image/webp'
        '.ico'  = 'image/x-icon'
    }

    $root = $PSScriptRoot
    if (-not $root) { $root = (Get-Location).Path }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.LocalPath
        if ($rawUrl -eq '/') { $rawUrl = '/index.html' }

        $relPath = $rawUrl.TrimStart('/')
        $relPath = $relPath -replace '/', '\'
        $filePath = Join-Path $root $relPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = $mimeTypes[$ext]
            if (-not $mime) { $mime = 'application/octet-stream' }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
            $response.ContentType = 'text/plain; charset=utf-8'
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
}
