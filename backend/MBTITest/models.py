from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Question(models.Model):
    text=models.TextField(help_text="Question Text")
    dimention=models.CharField(max_length=2, help_text="Dimention")
    direction=models.IntegerField(help_text="Direction")
    meaning=models.CharField(max_length=1, help_text="Meaning")

class TestCase(models.Model):
    email=models.EmailField(help_text="Worker Email")
    answer1=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="You find it takes effort to introduce yourself to other people.")
    answer2=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="You consider yourself more practical than creative.")
    answer3=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="Winning a debate matters less to you than making sure no one gets upset.")
    answer4=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="You get energized going to social events that involve many interactions.")
    answer5=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="You often spend time exploring unrealistic and impractical yet intriguing ideas.")
    answer6=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="Deadlines seem to you to be of relative rather than absolute importance.")
    answer7=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="Logic is usually more important than heart when it comes to making important decisions.")
    answer8=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="Your home and work environments are quite tidy.")
    answer9=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="You do not mind being at the center of attention.")
    answer10=models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(7)], help_text="Keeping your options open is more important than having a to-do list.")
    result=models.CharField(max_length=4, help_text="Result")
