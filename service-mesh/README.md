# Service Mesh - Istio

To use local images:

- `eval $(minikube docker-env)`

## Installing Istio

Following are the steps you can install in your k8s cluster:
Install istioctl:

- `curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.6.8 TARGET_ARCH=x86_64 sh -`
- `cd istio-1.11.0`
- `export PATH=$PWD/bin:$PATH`

### Install istio controller in k8s

To see list of all the profiles

- `istioctl profile list`

Display the configuration of a profile

- `istioctl profile dump demo`

Installing profile

- `istioctl install --set profile=demo -y`

Inject sidecar container inside the pod in a namespace:

- `kubectl label namespace [namespace-name] istio-injection=enabled`

Install kiali dashboard in istio system namespace:

- `kubectl apply -n istio-system -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/kiali.yaml`
- `kubectl apply -f kiali-service.yaml`
- `kubectl apply -n istio-system -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/jaeger.yaml`
- `kubectl apply -n istio-system -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/grafana.yaml`
- `kubectl apply -n istio-system -f https://raw.githubusercontent.com/istio/istio/release-1.11/samples/addons/prometheus.yaml`
