import {registerOTel, OTLPHttpProtoTraceExporter} from '@vercel/otel'

const endpoint = process.env.DYNATRACE_OTLP_ENDPOINT
const token = process.env.DYNATRACE_API_TOKEN

export function register() {
  if (!endpoint || !token) return

  registerOTel({
    serviceName: 'timostaudinger.com',
    traceExporter: new OTLPHttpProtoTraceExporter({
      url: `${endpoint}/v1/traces`,
      headers: {Authorization: `Api-Token ${token}`},
    }),
  })
}
