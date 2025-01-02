export function useMDXComponents(components) {
  return {
    metadata: ({ children }) => {
      <p>{children}</p>;
    },
    ...components,
  };
}
