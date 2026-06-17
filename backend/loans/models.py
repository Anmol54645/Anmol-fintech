from django.db import models

class Loan(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    loan_type = models.CharField(max_length=50)
    tenure = models.IntegerField()

    status = models.CharField(
        max_length=20,
        default="Pending"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name