# ✅ Pre-Commit Hook Setup Complete!

Your repositories are now protected against accidental secret commits.

## 🛡️ What's Installed

**Pre-commit hooks installed in:**
- ✅ `OpenKnots/terminal-ui`
- ✅ `OpenKnots/code-flow`

## 🔍 What Gets Checked

Every time you run `git commit`, the hook scans for:

### High Priority (Always Blocked)
- ❌ API keys (API_KEY, api-key, apikey)
- ❌ Access tokens (access_token, auth_token)
- ❌ Passwords (password=, passwd=)
- ❌ GitHub tokens (ghp_, gho_, github_pat_)
- ❌ AWS credentials (AKIA...)
- ❌ **Tailscale URLs** (*.ts.net)
- ❌ **Gateway URLs** (gateway.*url)
- ❌ **Device IDs** (device-id, device_id)

### Medium Priority (Warned)
- ⚠️ Private IPs (192.168.*, 10.*)
- ⚠️ Phone numbers (xxx-xxx-xxxx)
- ⚠️ Hardcoded credentials

### File-Level Blocks
- 🚫 .env files
- 🚫 .env.local, .env.production
- 🚫 Files named "secret" or "credentials"

## ✅ Testing It Works

Let's verify the hook is active:

```bash
cd ~/Documents/GitHub/OpenKnots/terminal-ui

# Try to commit a fake secret
echo 'const apiKey = "secret123"' > test.js
git add test.js
git commit -m "test"

# Expected output:
# ❌ Potential secrets found in: test.js
# Pattern: api[_-]?key
# COMMIT BLOCKED

# Clean up
git reset HEAD test.js
rm test.js
```

## 🎯 Real World Examples

### ❌ Will Be Blocked

```javascript
// API keys
const API_KEY = "abc123"
const apiSecret = "xyz789"

// Passwords
const password = "mypass123"

// Tailscale URLs (YOUR ACTUAL CONCERN)
const gatewayUrl = "https://my-app.tai1234.ts.net"

// Device IDs
const deviceId = "device-abc-123"

// GitHub tokens
GITHUB_TOKEN=ghp_abc123def456
```

### ✅ Safe to Commit

```javascript
// Example documentation
// Example: const API_KEY = "your-key-here"

// Environment variable names (no values)
process.env.API_KEY

// Localhost/examples
const url = "http://localhost:3000"
const testUrl = "https://example.com"
```

## 🚨 If Hook Triggers

When you see this:

```
❌ Potential secrets found in: file.ts
Pattern: api[_-]?key
```

**Do this:**

1. **Review the file** - Is it a real secret?
2. **If YES**: Remove the secret, use environment variables instead
3. **If NO (false positive)**: 
   - Check if it's in documentation (should be auto-skipped)
   - If legitimate, bypass ONCE: `git commit --no-verify`

## 🔧 Bypassing (Use Sparingly!)

```bash
# Only use if you're CERTAIN there are no secrets
git commit --no-verify -m "your message"
```

**Safe to bypass:**
- Documentation examples with fake keys
- The word "password" in variable names (not values)
- Public demo URLs

**NEVER bypass:**
- Real API keys
- Real Tailscale URLs
- Real gateway URLs
- Real credentials

## 📁 Files Auto-Skipped

These files/directories are automatically skipped:
- `node_modules/`
- `package-lock.json`, `pnpm-lock.yaml`
- `.next/`, `dist/`, `build/`
- `README.md`, `CONTRIBUTING.md`
- `.git-hooks-setup/` (this directory)

## 🔄 Installing in New Repos

When you clone or create a new repo:

```bash
# Copy the hook
cp ~/Documents/GitHub/OpenKnots/terminal-ui/.git/hooks/pre-commit \
   /path/to/new-repo/.git/hooks/

# Make executable
chmod +x /path/to/new-repo/.git/hooks/pre-commit

# Test it
cd /path/to/new-repo
.git/hooks/pre-commit
```

## 🛠️ Customizing

To add your own patterns:

```bash
# Edit the hook
nano ~/Documents/GitHub/OpenKnots/terminal-ui/.git/hooks/pre-commit

# Find the PATTERNS array and add:
PATTERNS=(
    # ... existing patterns ...
    "your-custom-pattern"
)
```

## 📊 Hook Status

Check if hook is active:

```bash
cd ~/Documents/GitHub/OpenKnots/terminal-ui
ls -la .git/hooks/pre-commit

# Should show:
# -rwxr-xr-x  1 val  staff  4560 Feb 25 07:00 .git/hooks/pre-commit
#  ^
#  └─ Executable (x) means it's active
```

## 🚫 What This DOESN'T Protect Against

- Secrets committed BEFORE installing the hook (use git-secrets or gitleaks to scan history)
- Secrets in submodules
- Secrets sent via other channels (Slack, email, etc.)
- Secrets in binary files

## 📚 Additional Security

For even more protection:

```bash
# Scan entire history for secrets
brew install gitleaks
gitleaks detect

# Or use git-secrets
brew install git-secrets
git secrets --install
git secrets --register-aws
```

## ❓ FAQ

**Q: Will this slow down my commits?**  
A: No, it's very fast (< 100ms for most commits)

**Q: Will contributors get this hook?**  
A: No, hooks are local-only. They must install separately.

**Q: What if I already committed a secret?**  
A: Remove it ASAP and rotate the credential. Use `git filter-branch` or `BFG Repo-Cleaner` to remove from history.

**Q: Can I disable it temporarily?**  
A: Yes: `chmod -x .git/hooks/pre-commit` (re-enable with `chmod +x`)

## ✅ You're Protected!

Every commit in `terminal-ui` and `code-flow` is now scanned for secrets before it reaches GitHub. 🎉

---

**Last Updated:** February 25, 2026  
**Hook Version:** 1.0  
**Repositories:** terminal-ui, code-flow
