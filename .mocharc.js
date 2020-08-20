module.exports = {
    "full-trace": true,
    "reporter": 'spec',
    "spec": ["node_modules/vl-ui-*/test/e2e/!(select-action|layer|circle*).test.js"],
    "timeout": '10000'
};
