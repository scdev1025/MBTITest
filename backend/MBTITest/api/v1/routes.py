from rest_framework import routers

from MBTITest.api.v1.viewsets import QuestionViewSet, TestCaseViewSet

router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet)
router.register(r'testcases', TestCaseViewSet)
