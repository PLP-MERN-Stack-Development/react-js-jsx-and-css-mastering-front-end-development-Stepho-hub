$ErrorActionPreference = 'Stop'

Write-Host " Running PLP Task Manager smoke tests..." -ForegroundColor Blue

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js detected: $nodeVersion" -ForegroundColor Green
}
catch {
    Write-Host " Node.js not found. Please install Node.js v18 or higher" -ForegroundColor Red
    exit 1
}

# Check if npm dependencies are installed
if (-not (Test-Path "./node_modules")) {
    Write-Host " Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start the dev server in the background
Write-Host " Starting development server..." -ForegroundColor Blue
$devServer = Start-Process npm -ArgumentList "run", "dev" -PassThru

# Wait for the server to start (adjust sleep if needed)
Start-Sleep -Seconds 3

# Check if the dev server is running on port 5173
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5173" -Method Head -ErrorAction SilentlyContinue
    Write-Host " Dev server running at http://localhost:5173" -ForegroundColor Green
}
catch {
    Write-Host " Dev server not responding. Check for errors in the terminal" -ForegroundColor Red
    Stop-Process -Id $devServer.Id -Force
    exit 1
}

# Open browser to test routes
Write-Host "`n Testing routes..." -ForegroundColor Blue

$routes = @(
    "http://localhost:5173/",
    "http://localhost:5173/tasks",
    "http://localhost:5173/posts"
)

foreach ($route in $routes) {
    Write-Host "  Opening $route"
    Start-Process $route
    Start-Sleep -Seconds 1
}

Write-Host "`n Manual verification steps:" -ForegroundColor Yellow
Write-Host "1. Verify theme toggle works (light/dark) and persists on refresh"
Write-Host "2. Add and complete tasks in the Task Manager"
Write-Host "3. Check Posts page loads data and search works"
Write-Host "4. Test responsive layout (resize browser window)"
Write-Host "5. Try mobile menu on narrow viewport"

Write-Host "`n Press Ctrl+C when done to stop the dev server" -ForegroundColor Blue
try {
    Wait-Process -Id $devServer.Id
}
catch {
    # Process was stopped by user
}
finally {
    if (-not $devServer.HasExited) {
        Stop-Process -Id $devServer.Id -Force
    }
}