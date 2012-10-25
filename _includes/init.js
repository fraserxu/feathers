// Initialize
// ----------
window.app = {
    models: {},
    views: {},
    routers: {},
    templates: _($('script[name]')).reduce(function(memo, el) {
        memo[el.getAttribute('name')] = _(el.innerHTML).template();
        return memo;
    }, {}),
    state: {},
    instance: {}
};
window.args = _(window.app).toArray();
