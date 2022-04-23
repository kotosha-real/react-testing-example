import React, { useEffect, useState } from 'react'

import { api } from '../../api/api'
import type { PostData } from '../../api/types'
import { Preloader } from '../../ui/Preloader/Preloader'
import { Post } from '../Post/Post'

import './Posts.pcss'

const Posts = () => {
    const [posts, setPosts] = useState<PostData[]>([])

    useEffect(() => {
        ;(async () => {
            const { data } = await api.getPosts()

            setPosts(data)
        })()
    }, [])

    return (
        <ul className="posts">
            {!posts.length && <Preloader fullPage />}
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post} />
                </li>
            ))}
        </ul>
    )
}

export { Posts }
