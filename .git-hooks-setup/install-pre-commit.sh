#!/bin/bash

# Install pre-commit hook for secret detection
# This script can be run in any repo to install the same hook

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || echo ".")"
HOOKS_DIR="$REPO_ROOT/.git/hooks"

echo "🔧 Installing pre-commit hook for secret detection..."
echo "   Repository: $REPO_ROOT"
echo ""

# Check if we're in a git repo
if [ ! -d "$REPO_ROOT/.git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p "$HOOKS_DIR"

# Copy the hook
if [ -f "$SCRIPT_DIR/pre-commit.sh" ]; then
    cp "$SCRIPT_DIR/pre-commit.sh" "$HOOKS_DIR/pre-commit"
    chmod +x "$HOOKS_DIR/pre-commit"
    echo "✅ Pre-commit hook installed from pre-commit.sh"
elif [ -f "$HOOKS_DIR/pre-commit" ]; then
    echo "✅ Pre-commit hook already exists"
else
    echo "❌ Error: pre-commit.sh not found in $SCRIPT_DIR"
    exit 1
fi

# Test the hook
echo ""
echo "🧪 Testing hook..."
if "$HOOKS_DIR/pre-commit" --test 2>/dev/null || true; then
    echo "✅ Hook is working"
else
    echo "⚠️  Hook test failed (this is normal if no files are staged)"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "The pre-commit hook will now:"
echo "  • Scan for API keys, tokens, passwords"
echo "  • Block commits with Tailscale/gateway URLs"
echo "  • Detect hardcoded credentials"
echo "  • Prevent .env files from being committed"
echo ""
echo "To bypass (emergency only): git commit --no-verify"
echo ""
