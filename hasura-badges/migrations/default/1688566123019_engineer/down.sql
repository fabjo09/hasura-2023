DROP FUNCTION IF EXISTS "get_pending_responses_for_engineer";
DROP PROCEDURE IF EXISTS "insert_candidature_request";
DROP TRIGGER IF EXISTS "manager_badge_candidature_proposal_response_trigger" ON "manager_badge_candidature_proposal_response";
DROP TRIGGER IF EXISTS "engineer_badge_candidature_proposal_response_trigger" ON "engineer_badge_candidature_proposal_response";
DROP TABLE IF EXISTS "engineer_to_manager_badge_candidature_proposals";
DROP TABLE IF EXISTS "manager_badge_candidature_proposal_response";
DROP TABLE IF EXISTS "badge_candidature_request";
DROP VIEW IF EXISTS "badge_candidature_view"  