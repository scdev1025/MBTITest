from rest_framework import viewsets
from rest_framework import mixins

from MBTITest.api.v1.serializers import QuestionSerializer, TestCaseSerializer
from MBTITest.models import Question, TestCase

class QuestionViewSet(viewsets.ModelViewSet):
    """
    Provides CRUD capabilities to the `Question` model.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class TestCaseViewSet(viewsets.ModelViewSet):
    """
    Provides CRUD capabilities to the `TestCase` model.
    """
    queryset = TestCase.objects.all()
    serializer_class = TestCaseSerializer
