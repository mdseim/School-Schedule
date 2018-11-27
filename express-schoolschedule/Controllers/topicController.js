var Topic = require('../models/topic');

// Display list of all Topics.
exports.topic_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic list');
};

// Display detail page for a specific Topic.
exports.topic_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic detail: ' + req.params.id);
};

// Display Topic create form on GET.
exports.topic_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic create GET');
};

// Handle Topic create on POST.
exports.topic_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic create POST');
};

// Display Topic delete form on GET.
exports.topic_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic delete GET');
};

// Handle Topic delete on POST.
exports.topic_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic delete POST');
};

// Display Topic update form on GET.
exports.topic_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic update GET');
};

// Handle Topic update on POST.
exports.topic_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Topic update POST');
};