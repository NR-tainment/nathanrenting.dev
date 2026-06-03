import type { MDXComponents } from "mdx/types";

/**
 * Type-safe MDX components mapping.
 *
 * Default markdown elements get sensible Tailwind classes that match the
 * portfolio's dark-cyan aesthetic. Override individual elements via props
 * when needed in MDX files.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium tracking-tight text-zinc-200 mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-zinc-300 leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-700 hover:decoration-cyan-400 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-6 text-zinc-300 mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 text-zinc-300 mb-4 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    code: ({ children }) => (
      <code className="font-mono text-sm bg-zinc-900 text-cyan-300 px-1.5 py-0.5 rounded border border-zinc-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="font-mono text-sm bg-zinc-900 text-zinc-200 p-4 rounded border border-zinc-800 overflow-x-auto mb-6">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-700 pl-4 py-1 my-6 text-zinc-400 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-zinc-800 my-12" />,
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full text-sm border border-zinc-800">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="text-left px-3 py-2 bg-zinc-900 text-zinc-200 border-b border-zinc-800 font-medium">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-3 py-2 text-zinc-300 border-b border-zinc-900">
        {children}
      </td>
    ),
    ...components,
  };
}
