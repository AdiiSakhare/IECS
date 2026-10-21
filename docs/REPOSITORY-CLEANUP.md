# Website repository cleanup

21 October 2026.

## Current website

The current five-page IECS site is the only website implementation retained in the active branches. Removed 113 retired files from the primary repository: archived CSS/JavaScript, previous hero/product/partner images and logos, unused product recreations, original page transcriptions, and superseded catalogue and redesign records. The active illustrations, fonts, client-source configuration and current coverage audit are retained.

Build and content checks require the retired source directories to remain absent. The generated `dist/` contains only the current public website. All client service requirements remain covered.

## Excluded repository

The user explicitly excluded `AdiiSakhare/iecs-website` from changes. It was inspected before that clarification, but no tracked files, branches or remote settings were changed. Its existing website and history remain untouched. This cleanup applies only to `AdiiSakhare/IECS`.

## Account inspection

The connected GitHub account exposed 11 owned repositories. All returned branch lists were inspected. Recursive file inventories, matching retired-file blob hashes, and available landing-page/README content were checked for additional IECS copies. No other IECS copy was identified outside `IECS` and `iecs-website`.

The unrelated repositories are Portfolio, AdiiSakhare (no branches), SwasthyaEMR, Supreme-controls, SupremeControls, ocupie-b2b, nextro, Atire and ArcadeOT-Windows. The large ArcadeOT development trees could not be retrieved recursively; only their top-level inventories were available for this inspection. This inspection does not establish absence inside every binary archive, historical commit, tag, fork, release artifact, cached deployment or external clone. Unrelated project files are not removed.

## History

This cleanup removes retired files from current branch contents using normal commits and fast-forward updates. Old commits remain accessible through Git history. Erasing historical objects would require a separate history rewrite of the affected repository and its references; even that cannot erase copies held in forks, caches or other people's clones. No force-push or repository deletion is used for this cleanup.
