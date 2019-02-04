#!/bin/sh
export SONAR_URL=http://sq.zepdev.net
export SONAR_LOGIN=523055ec9c6abe7beec762aaa6dec7b9ddf58268
export CI_COMMIT_SHA=7da255d25b49aa652c60716910460da69aa7933d
export CI_COMMIT_REF_NAME=master
export CI_PROJECT_ID=10575375
#sonar-scanner -Dsonar.host.url=$SONAR_URL -Dsonar.login=$SONAR_LOGIN -Dsonar.analysis.mode=preview -Dsonar.gitlab.commit_sha=$CI_COMMIT_SHA -Dsonar.gitlab.ref_name=$CI_COMMIT_REF_NAME -Dsonar.gitlab.project_id=$CI_PROJECT_ID -Dsonar.projectKey=design-system-website -Dsonar.sources=src
sonar-scanner -Dsonar.host.url=$SONAR_URL -Dsonar.login=$SONAR_LOGIN -Dsonar.gitlab.commit_sha=$CI_COMMIT_SHA -Dsonar.gitlab.ref_name=$CI_COMMIT_REF_NAME -Dsonar.gitlab.project_id=$CI_PROJECT_ID -Dsonar.projectKey=design-system-website -Dsonar.sources=src -Dsonnar.tests=src/__tests__