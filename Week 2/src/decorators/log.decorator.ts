export function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args: any[]) {
    console.log(`[LOG] Method: ${propertyKey}`)
    console.log('[LOG] Arguments:', args)

    return originalMethod.apply(this, args)
  }
}
