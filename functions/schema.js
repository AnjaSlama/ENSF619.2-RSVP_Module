/*
* **Copyright Regina Baher, 2021.**  
* Licensed under MIT License.  
* *Please see LICENSE for full license.* 
*/
"use strict";

const EventSchema = {
	type: "object",
	required: ["title", "date", "descr"],
	properties:
	{
		id: {
			type: "string"
		},
		title: {
			type: "string"
		},
		date: {
			type: "string"
		},
		itenerary: {
			type: "array",
		},
		mealOptions: {
			type: "array"
		},
		descr: {
			type: "string"
		}
	}

};

const GuestSchema = {
	type: "object",
	required: ["fullname", "email", "eventID"],
	properties: {
		invitationID: {
			type: "string"
		},
		eventID: {
			type: "string"
		},
		fullname: {
			type: "string"
		},
		email: {
			type: "string"
		},
		isUnderage: {
			type: "integer",
			default: 0,
			enum: [0, 1]
		},
		isUnder12: {
			type: "integer",
			default: 0,
			enum: [0, 1]
		},
		inWeddingParty: {
			type: "integer",
			default: 0,
			enum: [0, 1]
		},
		weddingPartyPosition: {
			type: "string",
			default: 0,
			enum: [0, 1, 2, 3, 4, 5, 6, 7]
		},
		rsvpStatus: {
			type: "integer",
			default: 0,
			enum: [0, 1, 2]
		},
		rsvpMeal: {
			type: "string"
		}
	}

};

/* TODO
const IteneraryItemSchema = {
	
	"title": this.title,
	"start": this.start,
	"end": this.end,
	"addr": this.addr
}*/

module.exports = {EventSchema, GuestSchema};