import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { JSX } from 'react'
import { highlight } from 'sugar-high'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code = ({ children, ...props }: any) => {
  const codeHTML = highlight(children)
  return <code {...props} dangerouslySetInnerHTML={{ __html: codeHTML }} />
}

const components = {
  code: Code
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
