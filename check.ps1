$lines = Get-Content 'c:\Users\dell\Desktop\kayan\assets\js\kayan-bundle.js'
$vars = @{}
$dups = @()
foreach ($line in $lines) {
    if ($line -match '^(const|let)\s+([a-zA-Z0-9_$]+)\s*[=;]') {
        $name = $matches[2]
        if ($vars.ContainsKey($name)) {
            $dups += $name
        } else {
            $vars[$name] = 1
        }
    }
}
if ($dups.Count -gt 0) {
    Write-Host "Duplicate declarations found:" ($dups -join ", ")
} else {
    Write-Host "No duplicate top-level declarations!"
}
