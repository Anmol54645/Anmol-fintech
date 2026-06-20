from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Anmol FinTech Backend Running",
        "status": "success"
    })