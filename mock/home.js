module.exports = function(router) {
    router.get('/mock/home/content', (req, res) => {
        res.json(`Vue framework front-end project template`)
    })
}