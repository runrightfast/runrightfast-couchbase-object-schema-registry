/**
 * Copyright [2013] [runrightfast.co]
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict';

/**
 * each view will be in its own design doc named after the view name.
 * 
 * These views assume that the bucket only contains ObjectSchema documents.
 * 
 * *** NOTE: if there are other types of documents within the same bucket that
 * have the same properties, then they would be picked up by the views.
 */
module.exports = [ {
	name : 'namespace_version',
	map : function(doc, meta) {
		if (meta.type !== 'json') {
			return;
		}

		if (doc._entityType = 'ns://runrightfast-validator/ObjectSchema' && doc.namespace && doc.version) {
			emit([ doc.namespace, doc.version ], 1);
		}
	},
	reduce : '_count'
}, {
	name : 'createdOn',
	map : function(doc, meta) {
		if (meta.type !== 'json') {
			return;
		}

		if (doc._entityType = 'ns://runrightfast-validator/ObjectSchema' && doc.createdOn) {
			emit(dateToArray(new Date(doc.createdOn)), 1);
		}
	},
	reduce : '_count'
}, {
	name : 'updatedOn',
	map : function(doc, meta) {
		if (meta.type !== 'json') {
			return;
		}

		if (doc._entityType = 'ns://runrightfast-validator/ObjectSchema' && doc.updatedOn) {
			emit(dateToArray(new Date(doc.updatedOn)), 1);
		}
	},
	reduce : '_count'
} ];