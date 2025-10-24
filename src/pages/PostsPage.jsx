import React, { useEffect, useMemo, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const PAGE_SIZE = 8

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)

        const techPosts = [
            {
                id: 1,
                title: "The New MacBook Pro M3: Revolutionary Performance",
                body: "Apple's latest MacBook Pro featuring the M3 chip sets new standards in professional computing. Key Specs: M3 Pro chip with 12-core CPU and 18-core GPU, 16.2-inch Liquid Retina XDR display (3456 x 2234), up to 36GB unified memory, 22 hours battery life. Notable features include ProMotion technology, 1600 nits peak brightness, and three Thunderbolt 4 ports. Released: October 2023. Starting Price: $1,999. Perfect for: Creative professionals, developers, and power users seeking top-tier performance with exceptional battery life.",
                specs: {
                    processor: "Apple M3 Pro",
                    display: "16.2-inch Liquid Retina XDR",
                    memory: "Up to 36GB unified",
                    storage: "512GB - 8TB SSD",
                    price: "$1,999 - $3,499",
                    releaseDate: "October 2023"
                }
            },
            {
                id: 2,
                title: "Samsung Galaxy S24 Ultra: The AI Photography Revolution",
                body: "Samsung's flagship S24 Ultra redefines mobile photography and AI capabilities. Key Specs: 200MP main camera, 6.8-inch QHD+ Dynamic AMOLED display, Snapdragon 8 Gen 3, 12GB RAM. Features advanced AI photography with improved night mode and 8K video recording. The S Pen now includes AI-powered note-taking and translation in 55 languages. Released: January 2024. Price: Starting at $1,199. IP68 water resistance, 5000mAh battery with 45W fast charging, and a durable Titanium frame make this the ultimate Android flagship.",
                specs: {
                    display: "6.8-inch QHD+ Dynamic AMOLED",
                    processor: "Snapdragon 8 Gen 3",
                    ram: "12GB LPDDR5X",
                    camera: "200MP main + 12MP ultra + 10MP telephoto",
                    price: "$1,199 - $1,499",
                    releaseDate: "January 2024"
                }
            },
            {
                id: 3,
                title: "NVIDIA RTX 4090: Gaming's New Frontier",
                body: "The RTX 4090 represents the absolute pinnacle of gaming graphics technology. Key Specs: 24GB GDDR6X memory, NVIDIA Ada Lovelace architecture, 16,384 CUDA cores, 2.52 GHz boost clock. Features DLSS 3.0 Frame Generation, Ray Tracing 3.0, and AV1 encoding. Delivers 4K gaming at 120+ FPS in most titles. Power draw: 450W recommended. Released: Q4 2022. Price: $1,599 MSRP. Perfect for: 4K/8K gaming, AI development, 3D rendering, and professional visualization work.",
                specs: {
                    memory: "24GB GDDR6X",
                    cudaCores: "16,384",
                    boostClock: "2.52 GHz",
                    tdp: "450W",
                    price: "$1,599",
                    releaseDate: "October 2022"
                }
            },
            {
                id: 4,
                title: "Sony WH-1000XM5: The Ultimate Noise-Cancelling Experience",
                body: "Sony's flagship WH-1000XM5 headphones set a new standard in audio excellence. Key Features: Industry-leading noise cancellation with 8 microphones, 30mm carbon fiber drivers, LDAC codec support for Hi-Res Audio. Multipoint connection allows seamless switching between devices. Battery Life: 40 hours with ANC on, 3 minutes quick charge for 3 hours playback. Released: May 2023. Price: $399. Notable features include Speak-to-Chat, adaptive sound control, and DSEE Extreme upscaling for compressed audio.",
                specs: {
                    drivers: "30mm Carbon Fiber",
                    battery: "40 hours (ANC on)",
                    connectivity: "Bluetooth 5.2, LDAC, AAC",
                    features: "Adaptive NC, Touch Controls",
                    price: "$399",
                    releaseDate: "May 2023"
                }
            },
            {
                id: 5,
                title: "Dell XPS 15: Professional Computing Redefined",
                body: "The latest Dell XPS 15 combines premium build quality with powerful performance. Featuring 13th Gen Intel processors and RTX graphics, it's perfect for content creators. The 4K OLED display option offers stunning color accuracy and contrast for professional work."
            },
            {
                id: 6,
                title: "iPad Pro M2: Your Creative Canvas",
                body: "Apple's M2-powered iPad Pro transforms the tablet experience. With desktop-class performance and the Apple Pencil hover feature, it's a powerful tool for digital artists and professionals. The Liquid Retina XDR display makes every visual task a joy."
            },
            {
                id: 7,
                title: "Logitech MX Master 3S: Precision Meets Comfort",
                body: "The MX Master 3S mouse brings quiet clicks and a 8,000 DPI sensor for ultimate precision. The electromagnetic scroll wheel and ergonomic design make it perfect for professionals. With multi-device support and app-specific customizations, it's the ultimate productivity tool."
            },
            {
                id: 8,
                title: "ASUS ROG Zephyrus G14: Portable Gaming Powerhouse",
                body: "This compact gaming laptop packs serious power with AMD Ryzen 9 processor and RTX graphics. The AniMe Matrix LED display on the lid adds unique personalization, while the 14-inch form factor keeps it portable. Perfect for gamers on the go."
            },
            {
                id: 9,
                title: "Google Pixel 8 Pro: AI-First Photography",
                body: "Google's latest flagship phone showcases advanced AI capabilities in photography and everyday tasks. The new Tensor G3 chip enables features like Magic Editor and Best Take. The improved camera system with a 50MP main sensor delivers exceptional photos in any condition."
            },
            {
                id: 10,
                title: "Microsoft Surface Studio 3: Creative Workspace Evolved",
                body: "The Surface Studio 3 redefines the all-in-one PC experience with its versatile Zero Gravity hinge and stunning 28-inch PixelSense display. Perfect for artists and designers, it combines powerful hardware with the flexibility of a digital drawing board."
            }
        ];

        setTimeout(() => {
            setPosts(techPosts);
            setLoading(false);
        }, 500);
    }, [])

    const filtered = useMemo(() => {
        if (!query) return posts
        return posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()) || p.body.toLowerCase().includes(query.toLowerCase()))
    }, [posts, query])

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
    const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    useEffect(() => {
        if (page > totalPages) setPage(1)
    }, [totalPages])

    return (
        <div className="w-full max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                        Posts
                    </h2>
                    <div className="w-full sm:w-72 md:w-80">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search posts..."
                            className="w-full px-4 py-2 border rounded-lg 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     dark:bg-gray-700 dark:border-gray-600 dark:text-white
                                     transition-all duration-200 hover:border-blue-400
                                     placeholder-gray-400 dark:placeholder-gray-500
                                     text-sm sm:text-base shadow-sm"
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center min-h-[300px] py-12">
                        <div role="status" className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 opacity-75"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 animate-fade-in">
                        <p className="text-red-600 dark:text-red-400 text-center">Error: {error}</p>
                    </div>
                ) : (
                    <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {pageData.map((post, index) => (
                                <Card
                                    key={post.id}
                                    className="transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg 
                                         border border-gray-100 dark:border-gray-700"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-200 
                                             text-lg sm:text-xl line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-200 
                                          line-clamp-3">
                                        {post.body}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                            Post #{post.id}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-opacity duration-200">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Page {page} of {totalPages} ({filtered.length} posts)
                            </p>
                            <div className="flex items-center gap-2">
                                <Button
                                    size="sm"
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="transition-transform duration-200 hover:scale-105 active:scale-95 px-4"
                                >
                                    Previous
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                    className="transition-transform duration-200 hover:scale-105 active:scale-95 px-4"
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostsPage;
