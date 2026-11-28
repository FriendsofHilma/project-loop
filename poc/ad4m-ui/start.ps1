# Local helper: start the hardened loopback AD4M executor for the read-only UI.
# No AD4M write is performed here. Credentials stay in mode-600 files in WSL.
$ErrorActionPreference = 'Stop'
$helpersWin = Join-Path $env:TEMP 'opencode'
$drive = $helpersWin.Substring(0, 1).ToLowerInvariant()
$helpersWsl = '/mnt/' + $drive + $helpersWin.Substring(2).Replace('\', '/')
$enableSwap = $helpersWsl + '/wsl-enable-swap.sh'
$restart = $helpersWsl + '/wsl-poc-restart-hardened.sh'
$unlock = $helpersWsl + '/wsl-poc-agent-state.sh'

foreach ($script in @($enableSwap, $restart, $unlock)) {
  $winPath = $script -replace '^/mnt/c/', 'C:/' -replace '/', '\'
  if (-not (Test-Path $winPath)) { throw "Missing local helper: $winPath" }
}

& wsl.exe -u root -e bash $enableSwap
& wsl.exe -e bash $restart
& wsl.exe -e bash $unlock

Write-Host 'Executor start attempted. Verify status in the UI before using it.'
