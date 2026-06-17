from rest_framework.routers import DefaultRouter
from .views import LoanViewSet

router = DefaultRouter()
router.register("loans", LoanViewSet)

urlpatterns = router.urls