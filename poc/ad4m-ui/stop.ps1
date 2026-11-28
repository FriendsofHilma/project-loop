# Local helper: stop the loopback AD4M executor gracefully.
$ErrorActionPreference = 'Stop'
$helpersWin = Join-Path $env:TEMP 'opencode'
$drive = $helpersWin.Substring(0, 1).ToLowerInvariant()
$helpersWsl = '/mnt/' + $drive + $helpersWin.Substring(2).Replace('\', '/')
$stopScriptWsl = $helpersWsl + '/wsl-poc-stop.sh'
$stopScriptWin = Join-Path $helpersWin 'wsl-poc-stop.sh'
if (-not (Test-Path $stopScriptWin)) { throw "Missing local helper: $stopScriptWin" }
& wsl.exe -e bash $stopScriptWsl
