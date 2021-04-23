// source: src/trace_location.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
import proto from 'google-protobuf/google-protobuf'

var jspb = require('google-protobuf');
var goog = jspb;
var global = function () { return this };

goog.exportSymbol('proto.CWALocationData', null, global);
goog.exportSymbol('proto.CrowdNotifierData', null, global);
goog.exportSymbol('proto.QRCodePayload', null, global);
goog.exportSymbol('proto.TraceLocation', null, global);
goog.exportSymbol('proto.TraceLocationType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QRCodePayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.QRCodePayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.QRCodePayload.displayName = 'proto.QRCodePayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TraceLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TraceLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TraceLocation.displayName = 'proto.TraceLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CrowdNotifierData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CrowdNotifierData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CrowdNotifierData.displayName = 'proto.CrowdNotifierData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CWALocationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CWALocationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CWALocationData.displayName = 'proto.CWALocationData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QRCodePayload.prototype.toObject = function(opt_includeInstance) {
  return proto.QRCodePayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QRCodePayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QRCodePayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    locationdata: (f = msg.getLocationdata()) && proto.TraceLocation.toObject(includeInstance, f),
    crowdnotifierdata: (f = msg.getCrowdnotifierdata()) && proto.CrowdNotifierData.toObject(includeInstance, f),
    vendordata: msg.getVendordata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QRCodePayload}
 */
proto.QRCodePayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QRCodePayload;
  return proto.QRCodePayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QRCodePayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QRCodePayload}
 */
proto.QRCodePayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.TraceLocation;
      reader.readMessage(value,proto.TraceLocation.deserializeBinaryFromReader);
      msg.setLocationdata(value);
      break;
    case 3:
      var value = new proto.CrowdNotifierData;
      reader.readMessage(value,proto.CrowdNotifierData.deserializeBinaryFromReader);
      msg.setCrowdnotifierdata(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVendordata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QRCodePayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.QRCodePayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.QRCodePayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QRCodePayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLocationdata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TraceLocation.serializeBinaryToWriter
    );
  }
  f = message.getCrowdnotifierdata();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.CrowdNotifierData.serializeBinaryToWriter
    );
  }
  f = message.getVendordata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.QRCodePayload.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.QRCodePayload} returns this
 */
proto.QRCodePayload.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TraceLocation locationData = 2;
 * @return {?proto.TraceLocation}
 */
proto.QRCodePayload.prototype.getLocationdata = function() {
  return /** @type{?proto.TraceLocation} */ (
    jspb.Message.getWrapperField(this, proto.TraceLocation, 2));
};


/**
 * @param {?proto.TraceLocation|undefined} value
 * @return {!proto.QRCodePayload} returns this
*/
proto.QRCodePayload.prototype.setLocationdata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.QRCodePayload} returns this
 */
proto.QRCodePayload.prototype.clearLocationdata = function() {
  return this.setLocationdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.QRCodePayload.prototype.hasLocationdata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CrowdNotifierData crowdNotifierData = 3;
 * @return {?proto.CrowdNotifierData}
 */
proto.QRCodePayload.prototype.getCrowdnotifierdata = function() {
  return /** @type{?proto.CrowdNotifierData} */ (
    jspb.Message.getWrapperField(this, proto.CrowdNotifierData, 3));
};


/**
 * @param {?proto.CrowdNotifierData|undefined} value
 * @return {!proto.QRCodePayload} returns this
*/
proto.QRCodePayload.prototype.setCrowdnotifierdata = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.QRCodePayload} returns this
 */
proto.QRCodePayload.prototype.clearCrowdnotifierdata = function() {
  return this.setCrowdnotifierdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.QRCodePayload.prototype.hasCrowdnotifierdata = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes vendorData = 4;
 * @return {!(string|Uint8Array)}
 */
proto.QRCodePayload.prototype.getVendordata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes vendorData = 4;
 * This is a type-conversion wrapper around `getVendordata()`
 * @return {string}
 */
proto.QRCodePayload.prototype.getVendordata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVendordata()));
};


/**
 * optional bytes vendorData = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVendordata()`
 * @return {!Uint8Array}
 */
proto.QRCodePayload.prototype.getVendordata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVendordata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.QRCodePayload} returns this
 */
proto.QRCodePayload.prototype.setVendordata = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TraceLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.TraceLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TraceLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TraceLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    starttimestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    endtimestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TraceLocation}
 */
proto.TraceLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TraceLocation;
  return proto.TraceLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TraceLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TraceLocation}
 */
proto.TraceLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStarttimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndtimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TraceLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TraceLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TraceLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TraceLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStarttimestamp();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getEndtimestamp();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.TraceLocation.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TraceLocation} returns this
 */
proto.TraceLocation.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.TraceLocation.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.TraceLocation} returns this
 */
proto.TraceLocation.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.TraceLocation.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.TraceLocation} returns this
 */
proto.TraceLocation.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 startTimestamp = 5;
 * @return {number}
 */
proto.TraceLocation.prototype.getStarttimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.TraceLocation} returns this
 */
proto.TraceLocation.prototype.setStarttimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 endTimestamp = 6;
 * @return {number}
 */
proto.TraceLocation.prototype.getEndtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.TraceLocation} returns this
 */
proto.TraceLocation.prototype.setEndtimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CrowdNotifierData.prototype.toObject = function(opt_includeInstance) {
  return proto.CrowdNotifierData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CrowdNotifierData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CrowdNotifierData.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publickey: msg.getPublickey_asB64(),
    cryptographicseed: msg.getCryptographicseed_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CrowdNotifierData}
 */
proto.CrowdNotifierData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CrowdNotifierData;
  return proto.CrowdNotifierData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CrowdNotifierData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CrowdNotifierData}
 */
proto.CrowdNotifierData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCryptographicseed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CrowdNotifierData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CrowdNotifierData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CrowdNotifierData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CrowdNotifierData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCryptographicseed_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.CrowdNotifierData.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CrowdNotifierData} returns this
 */
proto.CrowdNotifierData.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes publicKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.CrowdNotifierData.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes publicKey = 2;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.CrowdNotifierData.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes publicKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.CrowdNotifierData.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.CrowdNotifierData} returns this
 */
proto.CrowdNotifierData.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes cryptographicSeed = 3;
 * @return {!(string|Uint8Array)}
 */
proto.CrowdNotifierData.prototype.getCryptographicseed = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes cryptographicSeed = 3;
 * This is a type-conversion wrapper around `getCryptographicseed()`
 * @return {string}
 */
proto.CrowdNotifierData.prototype.getCryptographicseed_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCryptographicseed()));
};


/**
 * optional bytes cryptographicSeed = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCryptographicseed()`
 * @return {!Uint8Array}
 */
proto.CrowdNotifierData.prototype.getCryptographicseed_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCryptographicseed()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.CrowdNotifierData} returns this
 */
proto.CrowdNotifierData.prototype.setCryptographicseed = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CWALocationData.prototype.toObject = function(opt_includeInstance) {
  return proto.CWALocationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CWALocationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CWALocationData.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    defaultcheckinlengthinminutes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CWALocationData}
 */
proto.CWALocationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CWALocationData;
  return proto.CWALocationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CWALocationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CWALocationData}
 */
proto.CWALocationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {!proto.TraceLocationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefaultcheckinlengthinminutes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CWALocationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CWALocationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CWALocationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CWALocationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDefaultcheckinlengthinminutes();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 version = 1;
 * @return {number}
 */
proto.CWALocationData.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CWALocationData} returns this
 */
proto.CWALocationData.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TraceLocationType type = 2;
 * @return {!proto.TraceLocationType}
 */
proto.CWALocationData.prototype.getType = function() {
  return /** @type {!proto.TraceLocationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.TraceLocationType} value
 * @return {!proto.CWALocationData} returns this
 */
proto.CWALocationData.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 defaultCheckInLengthInMinutes = 3;
 * @return {number}
 */
proto.CWALocationData.prototype.getDefaultcheckinlengthinminutes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.CWALocationData} returns this
 */
proto.CWALocationData.prototype.setDefaultcheckinlengthinminutes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.TraceLocationType = {
  LOCATION_TYPE_UNSPECIFIED: 0,
  LOCATION_TYPE_PERMANENT_OTHER: 1,
  LOCATION_TYPE_TEMPORARY_OTHER: 2,
  LOCATION_TYPE_PERMANENT_RETAIL: 3,
  LOCATION_TYPE_PERMANENT_FOOD_SERVICE: 4,
  LOCATION_TYPE_PERMANENT_CRAFT: 5,
  LOCATION_TYPE_PERMANENT_WORKPLACE: 6,
  LOCATION_TYPE_PERMANENT_EDUCATIONAL_INSTITUTION: 7,
  LOCATION_TYPE_PERMANENT_PUBLIC_BUILDING: 8,
  LOCATION_TYPE_TEMPORARY_CULTURAL_EVENT: 9,
  LOCATION_TYPE_TEMPORARY_CLUB_ACTIVITY: 10,
  LOCATION_TYPE_TEMPORARY_PRIVATE_EVENT: 11,
  LOCATION_TYPE_TEMPORARY_WORSHIP_SERVICE: 12
};

export { proto }
// goog.object.extend(exports, proto);
