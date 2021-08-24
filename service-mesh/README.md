# Service Mesh - Istio

## Installing Istio

Following are the steps you can install in your k8s cluster:
Install istioctl:

- `curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.6.8 TARGET_ARCH=x86_64 sh -`
- `cd istio-1.11.0`
- `export PATH=$PWD/bin:$PATH`

Install istio controller in k8s:

- `istioctl install --set profile=demo -y`

Inject sidecar container inside the pod in a namespace:

- `kubectl label namespace [namespace-name] istio-injection=enabled`

Install kiali dashboard in istio system namespace:

- `kubectl apply -n istio-system -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/kiali.yaml`
- `kubectl apply -f kiali-service.yaml`
