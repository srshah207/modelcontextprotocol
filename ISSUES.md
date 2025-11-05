# Sample Issues for DORA Metrics

## Closed Issues

### Issue #87 - Memory leak in connection handler
- **Type**: Bug
- **Priority**: High
- **Created**: 2025-11-01
- **Closed**: 2025-11-03
- **Resolution**: Fixed in PR #102
- **Lead Time**: 2 days

### Issue #103 - Security vulnerability in auth validation
- **Type**: Security/Bug
- **Priority**: Critical
- **Created**: 2025-11-04 15:00
- **Closed**: 2025-11-04 17:00
- **Resolution**: Fixed in PR #104 (Hotfix)
- **Lead Time**: 2 hours (incident response)

## Open Issues

### Issue #105 - Add structured logging
- **Type**: Feature
- **Priority**: Medium
- **Created**: 2025-11-04
- **Status**: In Progress (PR #105 open)

### Issue #106 - Performance optimization needed
- **Type**: Enhancement
- **Priority**: Medium
- **Created**: 2025-11-05
- **Status**: In Progress (PR #106 open)

## Pull Requests

### Merged PRs
- **PR #101**: Improve authentication handling (Merged 2025-11-02)
- **PR #102**: Fix memory leak in connection handler (Merged 2025-11-03)
- **PR #104**: Critical security patch (Merged 2025-11-04) - HOTFIX

### Open PRs
- **PR #105**: Add structured logging support (Open since 2025-11-05)
- **PR #106**: Add caching layer for performance (Open since 2025-11-05)

## Deployments

- **v1.2.0** - 2025-11-02 15:00 (Auth improvements)
- **v1.2.1** - 2025-11-03 12:00 (Bug fixes)
- **v1.2.2** - 2025-11-04 18:00 (Security hotfix - incident recovery)

## DORA Metrics Summary

### Deployment Frequency
- 3 deployments in 3 days (Nov 2-4)
- Average: ~1 deployment per day

### Lead Time for Changes
- PR #101: ~1 day (Nov 1 commit → Nov 2 merge)
- PR #102: ~2 days (Nov 3 commit → Nov 3 merge)
- PR #104: ~15 minutes (Nov 4 commit → Nov 4 merge) - HOTFIX

### Change Failure Rate
- Issue #103 represents a production incident requiring hotfix
- 1 failure out of 3 deployments = 33% failure rate

### Time to Restore Service
- Issue #103: 2 hours from incident detection to deployment
- Incident detected: 2025-11-04 15:00
- Fix deployed: 2025-11-04 17:00
