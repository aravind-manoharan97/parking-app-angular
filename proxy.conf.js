const PROXY_CONFIG = [
    {
        context: [
            "/my",
            "/many",
            "/endpoints",
            "/i",
            "/need",
            "/to",
            "/proxy"
        ],
        target: "http://sreccse.info/Others/",
        secure: false
    }
]

module.exports = PROXY_CONFIG;