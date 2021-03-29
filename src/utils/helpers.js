const encodeBase64 = (data) => {
  return Buffer.from(data).toString("base64");
};

const decodeBase64 = (data) => {
  return Buffer.from(data, "base64").toString();
};

export { encodeBase64, decodeBase64 };
