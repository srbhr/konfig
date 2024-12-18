import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BeehiivTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="beehiiv-typescript-sdk"
      metaDescription={`beehiiv is a New York-based digital platform that enables users to write, monetize and distribute newsletters.`}
      company="beehiiv"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/logo.png"
      companyKebabCase="beehiiv"
      clientNameCamelCase="beehiiv"
      homepage="beehiiv.com"
      lastUpdated={new Date("2024-03-28T20:29:12.475Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/favicon.png"
      contactUrl="support.beehiiv.com"
      contactEmail="support@beehiiv.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["writing","newsletter"]}
      methods={[
  {
    "url": "/publications",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Publications",
    "typeScriptTag": "publications",
    "description": "Index",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns all statistics about the publication(https://developers.beehiiv.com/docs/v2<br>`stat_active_subscriptions` - Total number of active free and premium subscriptions<br>`stat_active_premium_subscriptions` - Total number of active premium/paid subscriptions<br>`stat_active_free_subscriptions` - Total number of active free subscriptions<br>`stat_average_open_rate` - The publications historical average open rate<br>`stat_average_click_rate` - The publications historical average click through rate<br>`stat_total_sent` - Total number of emails sent<br>`stat_total_unique_opened` - Total number of uniquely opened emails. Only counts the first open for each subscriber.<br>`stat_total_clicked` - The total number of links clicked from emails.",
        "example": [
          "stats"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The field that the results are sorted by. Defaults to created<br> `created` - The time in which the publication was first created.<br> `name` - The name of the publication.",
        "example": "name",
        "default": "created"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Publications",
    "typeScriptTag": "publications",
    "description": "Show",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns all statistics about the publication(https://developers.beehiiv.com/docs/v2<br>`stat_active_subscriptions` - Total number of active free and premium subscriptions<br>`stat_active_premium_subscriptions` - Total number of active premium/paid subscriptions<br>`stat_active_free_subscriptions` - Total number of active free subscriptions<br>`stat_average_open_rate` - The publications historical average open rate<br>`stat_average_click_rate` - The publications historical average click through rate<br>`stat_total_sent` - Total number of emails sent<br>`stat_total_unique_opened` - Total number of uniquely opened emails. Only counts the first open for each subscriber.<br>`stat_total_clicked` - The total number of links clicked from emails.",
        "example": [
          "stats"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/posts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Index",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the post(https://developers.beehiiv.com/docs/v2<br> `free_web_content` - Returns the web HTML rendered to a free reader<br> `free_email_content` - Returns the email HTML rendered to a free reader<br> `free_rss_content` - Returns the RSS feed HTML<br> `premium_web_content` - Returns the web HTML rendered to a premium reader<br> `premium_email_content` - Returns the email HTML rendered to a premium reader",
        "example": [
          "stats",
          "free_web_content"
        ]
      },
      {
        "name": "audience",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by audience",
        "example": "all",
        "default": "all"
      },
      {
        "name": "platform",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by platform.<br>`web` - Posts only published to web.<br>`email` - Posts only published to email.<br>`both` - Posts published to email and web.<br>`all` - Does not restrict results by platform.",
        "example": "all",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by the status of the post.<br>`draft` - not been scheduled.<br>`confirmed` - The post will be active after the `scheduled_at`.<br>`archived` - The post is no longer active.<br>`all` - Does not restrict results by status.",
        "example": "all",
        "default": "all"
      },
      {
        "name": "contentTags[]",
        "schema": "array",
        "required": false,
        "description": "Optionally filter posts by content_tags. Adding a content tag will return any post with that content tag associated to it.<br>Example: Filtering for `content_tags: [\"sales\",\"closing\"]` will return results of posts that have *either* sales or closing content_tags."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The field that the results are sorted by. Defaults to created<br> `created` - The time in which the post was first created.<br> `publish_date` - The time the post was set to be published.<br> `displayed_date` - The time displayed in place of the `publish_date`. If no `displayed_date` was set, it will default to the `publish_date`",
        "example": "displayed_date",
        "default": "created"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.",
        "default": "asc"
      },
      {
        "name": "hiddenFromFeed",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by the `hidden_from_feed` attribute of the post.<br>`all` - Does not restrict results by `hidden_from_feed`.<br>`true` - Only return posts hidden from the feed.<br>`false` - Only return posts that are visible on the feed.",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/posts/{postId}",
    "method": "destroyPost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Destroy",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/posts/{postId}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Show",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the post(https://developers.beehiiv.com/docs/v2<br> `free_web_content` - Returns the web HTML rendered to a free reader<br> `free_email_content` - Returns the email HTML rendered to a free reader<br> `free_rss_content` - Returns the RSS feed HTML<br> `premium_web_content` - Returns the web HTML rendered to a premium reader<br> `premium_email_content` - Returns the email HTML rendered to a premium reader",
        "example": [
          "stats",
          "free_web_content"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Index",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the subscription(https://developers.beehiiv.com/docs/v2.<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.",
        "example": [
          "stats",
          "custom_fields"
        ]
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by a status",
        "default": "all"
      },
      {
        "name": "tier",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by a their tier",
        "example": "all",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Optional email address to find a subscription.<br>This param must be an exact match and is case insensitive.",
        "example": "clark@dailyplanet.com"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The field that the results are sorted by. Defaults to created<br> `created` - The time in which the subscription was first created.<br> `email` - The email address of the subscription.",
        "example": "email",
        "default": "created"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.",
        "default": "asc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions",
    "method": "bulkUpdateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Bulk Update Status",
    "parameters": [
      {
        "name": "subscription_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "new_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create",
    "parameters": [
      {
        "name": "undefined",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "bruce.wayne@wayneenterprise.com"
      },
      {
        "name": "reactivate_existing",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "send_welcome_email",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "utm_source",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "twitter"
      },
      {
        "name": "utm_medium",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "organic"
      },
      {
        "name": "utm_campaign",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "fall_2022"
      },
      {
        "name": "referring_site",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://google.com"
      },
      {
        "name": "referral_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "double_opt_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tier",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stripe_customer_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "automation_ids",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions",
    "method": "bulkUpdateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Bulk Update Status",
    "parameters": [
      {
        "name": "subscription_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "new_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/{subscriptionId}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/{subscriptionId}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Show",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the subscription(https://developers.beehiiv.com/docs/v2.<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.",
        "example": [
          "stats",
          "custom_fields"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The requested subscription object"
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/{subscriptionId}",
    "method": "updateSubscriber",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update",
    "parameters": [
      {
        "name": "tier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripe_customer_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unsubscribe",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The updated subscription object"
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/{subscriptionId}",
    "method": "updateSubscriber",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update",
    "parameters": [
      {
        "name": "tier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripe_customer_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unsubscribe",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The updated subscription object"
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/by_subscriber_id/{subscriberId}",
    "method": "showSingleBySubscriberId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Show",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the subscription(https://developers.beehiiv.com/docs/v2.<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.",
        "example": [
          "stats",
          "custom_fields"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The requested subscription object"
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/by_email/{email}",
    "method": "getSingleByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Show",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the subscription(https://developers.beehiiv.com/docs/v2.<br>`custom_fields` - Returns an array of custom field values that have been set on the subscription.<br>`referrals` - Returns an array of subscriptions with limited data - `id`, `email`, and `status`. These are the subscriptions that were referred by this subscription.",
        "example": [
          "stats",
          "custom_fields"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The requested subscription object"
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/bulk_actions",
    "method": "bulkUpdateFields",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Bulk Update",
    "parameters": [
      {
        "name": "subscriptions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/bulk_actions",
    "method": "bulkUpdateFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Bulk Update",
    "parameters": [
      {
        "name": "subscriptions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/segments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Index",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by the segment's type.",
        "example": "dynamic",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by the segment's status.",
        "example": "completed",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The field that the results are sorted by. Defaults to created<br> `created` - The time in which the segment was first created.<br> `last_calculated` - The time that the segment last completed calculation. Measured in seconds since the Unix epoch.",
        "example": "last_calculated",
        "default": "created"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.",
        "default": "asc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/segments/{segmentId}",
    "method": "deleteSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/segments/{segmentId}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Show",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/segments/{segmentId}/results",
    "method": "getSubscriberIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Expand Results",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/email_blasts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Blasts",
    "typeScriptTag": "emailBlasts",
    "description": "Index",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the email blast(https://developers.beehiiv.com/docs/v2<br> `free_email_content` - Returns the email HTML rendered to a free reader<br> `premium_email_content` - Returns the email HTML rendered to a premium reader",
        "example": [
          "stats"
        ]
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.",
        "default": "asc"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The field that the results are sorted by. Defaults to created<br> `created` - The time in which the segment was first created.<br> `last_sent` - The time the blast was last sent. Measured in seconds since the Unix epoch.",
        "example": "last_sent",
        "default": "created"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/email_blasts/{emailBlastId}",
    "method": "getEmailBlast",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email Blasts",
    "typeScriptTag": "emailBlasts",
    "description": "Show",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Optional list of expandable objects.<br>`stats` - Returns statistics about the email blast(https://developers.beehiiv.com/docs/v2<br> `free_email_content` - Returns the email HTML rendered to a free reader<br> `premium_email_content` - Returns the email HTML rendered to a premium reader",
        "example": [
          "stats"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/referral_program",
    "method": "detailsRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Referral Program",
    "typeScriptTag": "referralProgram",
    "description": "Show",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/custom_fields",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Index",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/custom_fields",
    "method": "createPublicationCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create",
    "parameters": [
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KIND"
      },
      {
        "name": "display",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/custom_fields/{id}",
    "method": "deletePublicationCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/custom_fields/{id}",
    "method": "showSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Show",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/custom_fields/{id}",
    "method": "updatePublicationCustomField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update",
    "parameters": [
      {
        "name": "display",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/custom_fields/{id}",
    "method": "updatePublicationCustomField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update",
    "parameters": [
      {
        "name": "display",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/bulk_subscription_updates",
    "method": "listSubscriptionUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Subscription Updates",
    "typeScriptTag": "bulkSubscriptionUpdates",
    "description": "Index",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/bulk_subscription_updates/{id}",
    "method": "getSingleUpdate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bulk Subscription Updates",
    "typeScriptTag": "bulkSubscriptionUpdates",
    "description": "Show",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/automations/{automationId}/journeys",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automation Journeys",
    "typeScriptTag": "automationJourneys",
    "description": "Index",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Optionally filter the results by a status",
        "example": "all",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      },
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by a subscription id",
        "example": "sub_00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "Optionally filter the results by a subscription email address.<br>This param must be an exact match and is case insensitive.",
        "example": "clark@dailyplanet.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/automations/{automationId}/journeys",
    "method": "addExistingSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Automation Journeys",
    "typeScriptTag": "automationJourneys",
    "description": "Create",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "example@example.com"
      },
      {
        "name": "subscription_id",
        "schema": "string",
        "description": "",
        "example": "sub_00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "double_opt_override",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}",
    "method": "showJourneyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automation Journeys",
    "typeScriptTag": "automationJourneys",
    "description": "Show",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/automations",
    "method": "index",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Index",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "A limit on the number of objects to be returned. The limit can range between 1 and 100, and the default is 10.",
        "default": 10
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Pagination returns the results in pages. Each page contains the number of results specified by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/automations/{automationId}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Automations",
    "typeScriptTag": "automations",
    "description": "Show",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  },
  {
    "url": "/publications/{publicationId}/subscriptions/{subscriptionId}/tags",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription Tags",
    "typeScriptTag": "subscriptionTags",
    "description": "Post",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "Premium",
          "Basic",
          "Active",
          "Engaged"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The top level error response."
      },
      {
        "statusCode": "404",
        "description": "The top level error response."
      },
      {
        "statusCode": "429",
        "description": "The top level error response."
      },
      {
        "statusCode": "500",
        "description": "The top level error response."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Beehiiv API"
      apiBaseUrl="https://api.beehiiv.com/v2"
      apiVersion="2.0.1"
      endpoints={24}
      sdkMethods={61}
      schemas={72}
      parameters={87}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beehiiv/openapi.yaml"
      developerDocumentation="developers.beehiiv.com/docs/v2"
    />
  );
}
  