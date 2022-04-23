import React, { FC } from 'react'

import { PostData } from '../../api/types'

import './Post.pcss'

export interface PostProps {
    post: PostData
}

const Post: FC<PostProps> = (props) => {
    const { post } = props

    return (
        <div className="post">
            <h3>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    {post.title}
                </a>
            </h3>
            <p>{post.body}</p>
        </div>
    )
}

export { Post }
