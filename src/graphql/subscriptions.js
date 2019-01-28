// @flow
// this is an auto generated file. This will be overwritten

export const onCreateProperty = `subscription OnCreateProperty(
  $propertyId: String
  $name: String
  $averageNoise: Float
  $averageLighting: Float
  $averageComfort: Float
) {
  onCreateProperty(
    propertyId: $propertyId
    name: $name
    averageNoise: $averageNoise
    averageLighting: $averageLighting
    averageComfort: $averageComfort
  ) {
    propertyId
    name
    averageNoise
    averageLighting
    averageComfort
    averageHealth
    averageProductivity
  }
}
`;
export const onUpdateProperty = `subscription OnUpdateProperty(
  $propertyId: String
  $name: String
  $averageNoise: Float
  $averageLighting: Float
  $averageComfort: Float
) {
  onUpdateProperty(
    propertyId: $propertyId
    name: $name
    averageNoise: $averageNoise
    averageLighting: $averageLighting
    averageComfort: $averageComfort
  ) {
    propertyId
    name
    averageNoise
    averageLighting
    averageComfort
    averageHealth
    averageProductivity
  }
}
`;
export const onDeleteProperty = `subscription OnDeleteProperty(
  $propertyId: String
  $name: String
  $averageNoise: Float
  $averageLighting: Float
  $averageComfort: Float
) {
  onDeleteProperty(
    propertyId: $propertyId
    name: $name
    averageNoise: $averageNoise
    averageLighting: $averageLighting
    averageComfort: $averageComfort
  ) {
    propertyId
    name
    averageNoise
    averageLighting
    averageComfort
    averageHealth
    averageProductivity
  }
}
`;
