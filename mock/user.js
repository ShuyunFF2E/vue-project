module.exports = function(router) {
    router.get('/mock/user/:id', (req, res) => {
        res.json({
            name: 'NIU B',
            age: 20,
            gender: 'man',
            mobile: 18000000000,
            province: 'Shaanxi Province',
            city: 'Xi`an City',
            district: '',
            address: 'Fengcheng 1 st Road'
        })
    })
}