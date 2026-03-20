import { BASE_URL } from "@/types/contanst";
import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{
    return {
        rules: {
            userAgent: '*', //boss nào được áp dụng role này
            allow: '/', //boss được truy cập đường dẫn nào
            disallow: ["/cart", "/chat", "order"] //chặn boss truy cập
        },
        sitemap: `${BASE_URL}/sitemap.xml`
    }
}