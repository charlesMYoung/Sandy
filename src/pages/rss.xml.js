import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {Config} from "~/config"

export async function GET(context) {
    const blog = await getCollection('posts');
    return rss({
        title: Config.base.title,
        description: Config.base.description,
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/post/${post.id}/`,
        })),
    });
}