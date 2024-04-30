module.exports = {
  afterCreate(event) {
    const { result, params } = event;
    strapi.entityService.create("api::audit-log.audit-log", {
      data: {
        contenttype: "user-detail",

        action: "New Content Entry",
        Name: result.Name,
        Number: result.Number,
        Email: result.Email,

        params: params,

        request: event,
      },
    });
  },
  afterUpdate(event) {
    const { result, params } = event;

    strapi.entityService.create("api::audit-log.audit-log", {
      data: {
        contenttype: "user-detail",

        action: "Update content",

        content: result.Content,

        author: result.createdBy,

        params: params,

        request: event,
      },
    });
  },
  afterDelete(event) {
    const { result, params } = event;
    strapi.entityService.create("api::audit-log.audit-log", {
      data: {
        contenttype: "user-detail",

        action: "Delete Content",

        content: result.Content,

        params: params,

        request: event,
      },
    });
  },
};
