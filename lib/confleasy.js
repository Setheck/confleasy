var request = require("request"),
    _ = require('lodash');

// Reference: https://developer.atlassian.com/confdev/confluence-rest-api/confluence-rest-api-examples#ConfluenceRESTAPIExamples-Createanewpage
// 			  https://docs.atlassian.com/atlassian-confluence/REST/latest/

/*
	Author: Seth Thompson
	Notes:
		All callbacks signature is function(error, response, body)
*/

var exports = module.exports = new function(){
	var username, password, api_url;
	var that = this;

	this.checkConfiguration = function() {
		if (that.username && that.password && that.api_url)
			return true;

		throw new Error("Invalid Configuration, try calling configure(user, pass, url) again.");
	};

	return {
		configure: function(user, pass, url){
			that.username = user;
			that.password = pass;

            //TODO: Validate url
			that.api_url = url + "/rest/api/";
		},

		// /rest/api/content [GET, POST]
		getContent: function(callback){
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content",
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},
		
		// /rest/api/content [GET, POST]
		postContent: function(json_data, callback){
			that.checkConfiguration();

			request.post({
				url: that.api_url + "content",
				json: true,
				body: json_data,
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id} [DELETE, PUT, GET]
		getContentById: function(content_id, callback) {
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/" + conent_id,
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id}/history [GET]
		getContentHistoryById: function(content_id, callback) {
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/" + conent_id + "/history",
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);	
		},

		// /rest/api/content/{id}/history/{version}/macro/hash/{hash} [GET]
		getContentMacroByHash: function(content_id, version, hash, callback) {

		},

		// /rest/api/content/{id} [DELETE, PUT, GET]
		putContentById: function(content_id, json_data, callback) {
			that.checkConfiguration();

			request.put({
				url: that.api_url + "content/" + content_id,
				json: true,
				body: json_data,
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id} [DELETE, PUT, GET]
		deleteContentById: function(content_id, callback) {
			that.checkConfiguration();

			request.del({
				url: that.api_url + "content/" + content_id,
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);	
		},

		// /rest/api/content/search [GET]
		searchContent: function(callback){
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/search",
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id}/child [GET]
		getContentByIdChild: function(content_id, callback){
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/" + content_id + "/child",
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id}/child/{type} [GET]
		getContentByIdChildByType: function(content_id, type, callback){
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/" + content_id + "/child/" + type,
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id}/child/comment [GET]
		getContentByIdChildComment: function(content_id, callback){
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/" + content_id + "/child/comment",
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id}/child/attachment [GET, POST]
		getContentByIdChildAttatchment: function(content_id, callback){
			that.checkConfiguration();

			request.get({
				url: that.api_url + "content/" + content_id + "/child/attachment",
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);
		},

		// /rest/api/content/{id}/child/attachment [GET, POST]
		postContentByIdChildAttachment: function(content_id, payload, callback) {
			that.checkConfiguration();

			request.post({
				url: that.api_url + "content/" + content_id + "/child/attachment",
				json: true,
				body: payload,
				auth: {
					user: that.username,
					pass: that.password
				}
			}, callback);	
		},

		// /rest/api/content/{id}/child/attachment/{attachmentId} [PUT]
        putContentByIdChildAttachmentId: function(content_id, attachment_id, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/child/attachment/{attachmentId}/data [POST]
        postContentByIdChildAttchmentIdData: function(content_id, attachment_id, payload, callback){
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/descendant [GET]
        getDescendantByContentId: function(content_id, callback){
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/descendant/{type} [GET]
        getDescendantByContentIdType: function(content_id, type, callback){
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/label [GET, POST]
        getContentByIdLabel: function(content_id, callback){
            throw new Error("Not Yet Implemented");
        },

        postContentByIdLabel: function(content_id, payload, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/property [POST, GET]
        getContentByIdProperty: function(content_id, callback){
            throw new Error("Not Yet Implemented");
        },

        postContentByIdProperty: function(content_id, payload, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/property/{key} [DELETE, POST, PUT, GET]
        getContentByIdPropertyKey: function(content_id, key, callback){
            throw new Error("Not Yet Implemented");
        },

        postContentByIdPropertyKey: function(content_id, key, payload, callback) {
            throw new Error("Not Yet Implemented");
        },

        putContentByIdPropertyKey: function(content_id, key, payload, callback) {
            throw new Error("Not Yet Implemented");
        },

        deleteContentByIdPropertyKey: function(content_id, key, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/restriction
        getContentByIdRestriction: function(content_id, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/restriction/byOperation [GET]
        getContentByIdRestrictionByOperation: function(content_id, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/content/{id}/restriction/byOperation/{operationKey} [GET]
        getContentByIdRestrictionByOperationKey: function(content_id, operationKey, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/contentbody/convert/{to} [POST]
        postConvertContentBodyTo: function(to, payload, callback){
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/longtask [GET]
        getLongTask: function(callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/longtask/{id} [GET]
        getLongTaskById: function(id, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/space [GET, POST]
        getSpace: function(callback) {
            throw new Error("Not Yet Implemented");
        },

        postSpace: function(payload, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/space/_private [POST]
        postSpacePrivate: function(payload, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/space/{spaceKey} [DELETE, PUT]
        putSpaceBySpaceKey: function(space_key, callback) {
            throw new Error("Not Yet Implemented");
        },

        deleteSpaceBySpaceKey: function(space_key, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/space/{spaceKey} [GET]
        getSpaceBySpaceKey: function(space_key, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/space/{spaceKey}/content [GET]
        getSpaceBySpaceKeyContent: function(space_key, callback) {
            throw new Error("Not Yet Implemented");
        },

		// /rest/api/space/{spaceKey}/content/{type} [GET]
        getSpaceBySpaceKeyContentType: function(space_key, type, callback) {
            throw new Error("Not Yet Implemented");
        }
	};
};

/*




*/