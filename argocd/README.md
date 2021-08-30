# Argo CD installation

- `kubectl create namespace argocd`
- `kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml`

## To get the password of argocd ui

- `kubectl get secret -n argocd argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo`

## Setup argocd repo and node port svc

- `kubectl apply -f setup`

## Deploy app of apps

- `kubectl apply -f app-of-apps.yaml`
