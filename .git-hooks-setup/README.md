# Git Hooks Setup - Secret Detection

This directory contains reusable git hooks for preventing secret leaks.

## ⚠️ Important: Local Only

**These hooks are LOCAL and NOT tracked by git.** They won't be pushed to GitHub or shared with contributors. Each developer must install them separately.

## What's Included

- **pre-commit hook** - Scans for secrets before allowing commits

## Installed Hooks

### Pre-Commit Hook

**Location:** `.git/hooks/pre-commit` (local only, not tracked)

**What it checks:**

✅ API keys and tokens  
✅ Passwords and credentials  
✅ Tailscale URLs and gateway URLs  
✅ Device IDs  
✅ Private IP addresses  
✅ GitHub tokens (ghp_, gho_, github_pat_)  
✅ AWS credentials  
✅ Phone numbers  
✅ Email addresses in suspicious contexts  
✅ .env files  

**What it blocks:**

```bash
# Example patterns that will be blocked:
API_KEY=abc123def456
const password = "secret123"
const url = "https://my-gateway.ts.net"
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
```

## Testing the Hook

```bash
cd ~/Documents/GitHub/OpenKnots/terminal-ui

# Create a test file with a fake secret
echo 'const apiKey = "abc123secret456"' > test-secret.txt
git add test-secret.txt
git commit -m "test"

# You should see:
# ❌ Potential secrets found in: test-secret.txt
# Pattern: api[_-]?key

# Clean up
git reset HEAD test-secret.txt
rm test-secret.txt
```

## Bypassing the Hook

**⚠️ Use with extreme caution!**

If you're ABSOLUTELY SURE there are no secrets:

```bash
git commit --no-verify -m "your message"
```

**Only bypass if:**
- False positives (e.g., the word "password" in documentation)
- Example code with fake credentials
- Public demo URLs

**Never bypass for:**
- Real API keys
- Real passwords
- Real gateway URLs
- Real device IDs

## Installing in Other Repos

### Option 1: Manual Copy

```bash
# From terminal-ui repo
cp .git/hooks/pre-commit /path/to/other-repo/.git/hooks/
chmod +x /path/to/other-repo/.git/hooks/pre-commit
```

### Option 2: Use the Installer (TODO)

```bash
# Run from any repo
~/Documents/GitHub/OpenKnots/terminal-ui/.git-hooks-setup/install-pre-commit.sh
```

## Already Installed In

✅ `OpenKnots/terminal-ui`  
✅ `OpenKnots/code-flow`

## Adding Custom Patterns

Edit `.git/hooks/pre-commit` and add to the `PATTERNS` array:

```bash
declare -a PATTERNS=(
    # ... existing patterns ...
    "your[_-]?custom[_-]?pattern"
)
```

## Checking Existing Commits

To scan the entire repository history:

```bash
# Scan all files for secrets
git grep -iE "api[_-]?key|password|tailscale" $(git rev-list --all)

# Or use a tool like:
brew install gitleaks
gitleaks detect
```

## Why Local Only?

1. **Privacy** - Hook patterns might reveal what you consider sensitive
2. **Flexibility** - Each dev can customize for their workflow
3. **No Force** - We can't force contributors to use our hooks
4. **Easy Override** - Contributors might need different rules

## Best Practices

1. **Install immediately** after cloning a repo
2. **Test with fake secrets** to verify it works
3. **Update patterns** as you discover new leak types
4. **Never bypass** unless you're certain
5. **Use environment variables** instead of hardcoding secrets

## Resources

- [Git Hooks Documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- [Gitleaks](https://github.com/gitleaks/gitleaks) - Advanced secret scanning
- [git-secrets](https://github.com/awslabs/git-secrets) - AWS tool for preventing secrets
- [pre-commit framework](https://pre-commit.com/) - More advanced hook management

## Troubleshooting

### Hook not running

```bash
# Check if hook exists and is executable
ls -la .git/hooks/pre-commit
# Should show: -rwxr-xr-x

# Make executable if needed
chmod +x .git/hooks/pre-commit
```

### False positives

Edit `.git/hooks/pre-commit` and either:
1. Remove the pattern causing false positives
2. Add your file to `SKIP_PATTERNS`
3. Use `--no-verify` for that specific commit

### Hook runs but doesn't detect secrets

```bash
# Test manually
.git/hooks/pre-commit

# Check if patterns are correct
grep "PATTERNS" .git/hooks/pre-commit
```

## Future Enhancements

- [ ] Add support for custom config file (`.git-hooks.config`)
- [ ] Integrate with gitleaks for better detection
- [ ] Add pre-push hook for remote URL validation
- [ ] Create installer script for easy setup
- [ ] Add whitelist for known-safe files

---

**Remember:** This is your last line of defense. Always review what you're committing!
