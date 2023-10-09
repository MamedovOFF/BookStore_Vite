import * as jsonapiSerializer from 'jsonapi-serializer'
import { AxiosResponse } from 'axios'

export function deserialize(data: AxiosResponse) {
  return new jsonapiSerializer.Deserializer({
    keyForAttribute: (field) => field,
    pluralizeType: false,
  }).deserialize(data)
}
