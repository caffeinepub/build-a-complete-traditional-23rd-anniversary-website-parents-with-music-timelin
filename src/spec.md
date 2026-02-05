# Specification

## Summary
**Goal:** Update the anniversary timeline milestones to match the provided events and add a visitor comment submission feature that persists and displays comments.

**Planned changes:**
- Update `frontend/src/anniversary/content.ts` to include all 7 user-provided timeline milestones (2003–2020) with dates/wording preserved as provided.
- Add at least 2 additional positive placeholder timeline milestones that are clearly labeled as editable within the same timeline array.
- Implement backend comment storage in `backend/main.mo` with methods to add a comment and list comments, including basic validation and stable persistence across refreshes/upgrades.
- Update the frontend `CommentsSection` to include a name + comment submission form, submit to the backend, and refresh the displayed comment list via React Query without a full page reload.
- Add loading and error feedback states for comment submission and comment list refresh in the Comments UI.

**User-visible outcome:** Visitors can view the updated timeline and submit their name and a comment, which is saved and then appears in the on-page comments list after submission.
