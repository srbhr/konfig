import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ShortcutTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="shortcut-typescript-sdk"
      metaDescription={`Shortcut is the first project management platform for software development that brings together every team across an organization to build better products. More than 10,000 companies worldwide use Shortcut to facilitate healthier planning and collaboration so teams can focus on what matters – creating software their customers love. A Great Place to Work-Certified™ company, Shortcut is headquartered in New York City with employees spread across the globe and is backed by Battery Ventures, Resolute Ventures, Lerer Hippeau Ventures, and a number of other top-tier investors.

Visit https://www.shortcut.com to learn more.`}
      company="Shortcut"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/logo.png"
      companyKebabCase="shortcut"
      clientNameCamelCase="shortcut"
      homepage="shortcut.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["project_management","software_development","collaboration"]}
      methods={[
  {
    "url": "/api/v3/categories",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "List Categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/categories",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Create Category",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Category can be used to associate Objectives."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/categories/{category-public-id}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Delete Category",
    "parameters": [
      {
        "name": "categoryPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Category.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/categories/{category-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Get Category",
    "parameters": [
      {
        "name": "categoryPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Category.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Category can be used to associate Objectives."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/categories/{category-public-id}",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "Update Category",
    "parameters": [
      {
        "name": "categoryPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Category you wish to update.",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Category can be used to associate Objectives."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/categories/{category-public-id}/milestones",
    "method": "listMilestones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "List Category Milestones",
    "parameters": [
      {
        "name": "categoryPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Category.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/categories/{category-public-id}/objectives",
    "method": "listObjectives",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Category",
    "typeScriptTag": "category",
    "description": "List Category Objectives",
    "parameters": [
      {
        "name": "categoryPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Category.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/custom-fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "List Custom Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/custom-fields/{custom-field-public-id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Delete Custom Field",
    "parameters": [
      {
        "name": "customFieldPublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the CustomField.",
        "example": "CUSTOM-FIELD-PUBLIC-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/custom-fields/{custom-field-public-id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Get Custom Field",
    "parameters": [
      {
        "name": "customFieldPublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the CustomField.",
        "example": "CUSTOM-FIELD-PUBLIC-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/custom-fields/{custom-field-public-id}",
    "method": "updateDefinition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Update Custom Field",
    "parameters": [
      {
        "name": "customFieldPublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the CustomField.",
        "example": "CUSTOM-FIELD-PUBLIC-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "icon_set_identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "after_id",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "409",
        "description": "Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates",
    "method": "listEntityTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "List Entity Templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates",
    "method": "createNewEntity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create Entity Template",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "story_contents",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An entity template can be used to prefill various fields when creating new stories."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates/disable",
    "method": "disableTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Disable Story Templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates/enable",
    "method": "enableTemplateFeature",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Enable Story Templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates/{entity-template-public-id}",
    "method": "deleteEntityTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Delete Entity Template",
    "parameters": [
      {
        "name": "entityTemplatePublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the entity template.",
        "example": "ENTITY-TEMPLATE-PUBLIC-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates/{entity-template-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get Entity Template",
    "parameters": [
      {
        "name": "entityTemplatePublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the entity template.",
        "example": "ENTITY-TEMPLATE-PUBLIC-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity template can be used to prefill various fields when creating new stories."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/entity-templates/{entity-template-public-id}",
    "method": "updateContents",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update Entity Template",
    "parameters": [
      {
        "name": "entityTemplatePublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the template to be updated.",
        "example": "ENTITY-TEMPLATE-PUBLIC-ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "story_contents",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An entity template can be used to prefill various fields when creating new stories."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epic-workflow",
    "method": "getWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Get Epic Workflow",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated in the Shortcut UI. "
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics",
    "method": "listAllAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "List Epics",
    "parameters": [
      {
        "name": "includes_description",
        "schema": "boolean",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics",
    "method": "createNewEpic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Create Epic",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "objective_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "planned_start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "milestone_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "epic_state_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An Epic is a collection of stories that together might make up a release, a objective, or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}",
    "method": "deleteEpic",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Delete Epic",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Epic.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Get Epic",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Epic.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Epic is a collection of stories that together might make up a release, a objective, or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Update Epic",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Epic.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "objective_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "planned_start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "milestone_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "epic_state_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "after_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Epic is a collection of stories that together might make up a release, a objective, or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/comments",
    "method": "getAllEpicComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "List Epic Comments",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Epic.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Create Epic Comment",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the associated Epic.",
        "example": 0
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Comments associated with Epic Discussions."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Delete Epic Comment",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the associated Epic.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
    "method": "getCommentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Get Epic Comment",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the associated Epic.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Comments associated with Epic Discussions."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
    "method": "createCommentComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Create Epic Comment Comment",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the associated Epic.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the parent Epic Comment.",
        "example": 0
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Comments associated with Epic Discussions."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Update Epic Comment",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the associated Epic.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Comments associated with Epic Discussions."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/stories",
    "method": "listStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "List Epic Stories",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Epic.",
        "example": 0
      },
      {
        "name": "includes_description",
        "schema": "boolean",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/epics/{epic-public-id}/unlink-productboard",
    "method": "unlinkProductboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Unlink Productboard from Epic",
    "parameters": [
      {
        "name": "epicPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Epic.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/external-link/stories",
    "method": "getStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ExternalLinkStory",
    "typeScriptTag": "externalLinkStory",
    "description": "Get External Link Stories",
    "parameters": [
      {
        "name": "external_link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_LINK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "List Files",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/files",
    "method": "uploadAndAssociate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Upload Files",
    "parameters": [
      {
        "name": "story_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "file0",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE0"
      },
      {
        "name": "file1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file3",
        "schema": "string",
        "required": false,
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/files/{file-public-id}",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Delete File",
    "parameters": [
      {
        "name": "filePublicId",
        "schema": "integer",
        "required": true,
        "description": "The File’s unique ID.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/files/{file-public-id}",
    "method": "getFileInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Get File",
    "parameters": [
      {
        "name": "filePublicId",
        "schema": "integer",
        "required": true,
        "description": "The File’s unique ID.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/files/{file-public-id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Update File",
    "parameters": [
      {
        "name": "filePublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID assigned to the file in Shortcut.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uploader_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Create Group",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "member_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "mention_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MENTION_NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "display_icon_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Group."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups/disable",
    "method": "disableWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Disable Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups/enable",
    "method": "enableWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Enable Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups/{group-public-id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Get Group",
    "parameters": [
      {
        "name": "groupPublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the Group.",
        "example": "GROUP-PUBLIC-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Group."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups/{group-public-id}",
    "method": "updateGroupById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Update Group",
    "parameters": [
      {
        "name": "groupPublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the Group.",
        "example": "GROUP-PUBLIC-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_icon_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mention_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "member_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workflow_ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Group."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/groups/{group-public-id}/stories",
    "method": "listStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "List Group Stories",
    "parameters": [
      {
        "name": "groupPublicId",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the Group.",
        "example": "GROUP-PUBLIC-ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations",
    "method": "getAllIterations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "List Iterations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations",
    "method": "createNewIteration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "Create Iteration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An Iteration is a defined, time-boxed period of development for a collection of Stories. See https://help.shortcut.com/hc/en-us/articles/360028953452-Iterations-Overview for more information."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations/disable",
    "method": "disableIterations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "Disable Iterations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations/enable",
    "method": "enableIterations",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "Enable Iterations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations/{iteration-public-id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "Delete Iteration",
    "parameters": [
      {
        "name": "iterationPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Iteration.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations/{iteration-public-id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "Get Iteration",
    "parameters": [
      {
        "name": "iterationPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Iteration.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Iteration is a defined, time-boxed period of development for a collection of Stories. See https://help.shortcut.com/hc/en-us/articles/360028953452-Iterations-Overview for more information."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations/{iteration-public-id}",
    "method": "updateIterationById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "Update Iteration",
    "parameters": [
      {
        "name": "iterationPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Iteration.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Iteration is a defined, time-boxed period of development for a collection of Stories. See https://help.shortcut.com/hc/en-us/articles/360028953452-Iterations-Overview for more information."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/iterations/{iteration-public-id}/stories",
    "method": "listStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Iteration",
    "typeScriptTag": "iteration",
    "description": "List Iteration Stories",
    "parameters": [
      {
        "name": "iterationPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Iteration.",
        "example": 0
      },
      {
        "name": "includes_description",
        "schema": "boolean",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/key-results/{key-result-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KeyResult",
    "typeScriptTag": "keyResult",
    "description": "Get Key Result",
    "parameters": [
      {
        "name": "keyResultPublicId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Key Result.",
        "example": "KEY-RESULT-PUBLIC-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/key-results/{key-result-public-id}",
    "method": "updateValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KeyResult",
    "typeScriptTag": "keyResult",
    "description": "Update Key Result",
    "parameters": [
      {
        "name": "keyResultPublicId",
        "schema": "string",
        "required": true,
        "description": "The ID of the Key Result.",
        "example": "KEY-RESULT-PUBLIC-ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initial_observed_value",
        "schema": "object",
        "description": ""
      },
      {
        "name": "observed_value",
        "schema": "object",
        "description": ""
      },
      {
        "name": "target_value",
        "schema": "object",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "List Labels",
    "parameters": [
      {
        "name": "slim",
        "schema": "boolean",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Create Label",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Label can be used to associate and filter Stories and Epics, and also create new Workspaces."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels/{label-public-id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Delete Label",
    "parameters": [
      {
        "name": "labelPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Label.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels/{label-public-id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Get Label",
    "parameters": [
      {
        "name": "labelPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Label.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Label can be used to associate and filter Stories and Epics, and also create new Workspaces."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels/{label-public-id}",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "Update Label",
    "parameters": [
      {
        "name": "labelPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Label you wish to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Label can be used to associate and filter Stories and Epics, and also create new Workspaces."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels/{label-public-id}/epics",
    "method": "listEpics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "List Label Epics",
    "parameters": [
      {
        "name": "labelPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Label.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/labels/{label-public-id}/stories",
    "method": "listStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Label",
    "typeScriptTag": "label",
    "description": "List Label Stories",
    "parameters": [
      {
        "name": "labelPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Label.",
        "example": 0
      },
      {
        "name": "includes_description",
        "schema": "boolean",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/linked-files",
    "method": "listLinkedFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "List Linked Files",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/linked-files",
    "method": "createLinkedFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Create Linked File",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "story_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "thumbnail_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uploader_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/linked-files/{linked-file-public-id}",
    "method": "deleteLinkedFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Delete Linked File",
    "parameters": [
      {
        "name": "linkedFilePublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the linked file.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/linked-files/{linked-file-public-id}",
    "method": "getLinkedFileInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Get Linked File",
    "parameters": [
      {
        "name": "linkedFilePublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the linked file.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/linked-files/{linked-file-public-id}",
    "method": "updateLinkedFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Update Linked File",
    "parameters": [
      {
        "name": "linkedFilePublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the linked file.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "story_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thumbnail_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uploader_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/member",
    "method": "getCurrentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Member",
    "typeScriptTag": "member",
    "description": "Get Current Member Info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/members",
    "method": "listWorkspaceMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Member",
    "typeScriptTag": "member",
    "description": "List Members",
    "parameters": [
      {
        "name": "org-public-id",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/members/{member-public-id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Member",
    "typeScriptTag": "member",
    "description": "Get Member",
    "parameters": [
      {
        "name": "memberPublicId",
        "schema": "string",
        "required": true,
        "description": "The Member's unique ID.",
        "example": "MEMBER-PUBLIC-ID"
      },
      {
        "name": "org-public-id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Details about an individual user within the Workspace."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/milestones",
    "method": "listAllAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestone",
    "typeScriptTag": "milestone",
    "description": "List Milestones",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/milestones",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Milestone",
    "typeScriptTag": "milestone",
    "description": "Create Milestone",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Milestone is a collection of Epics that represent a release or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/milestones/{milestone-public-id}",
    "method": "deleteMilestone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Milestone",
    "typeScriptTag": "milestone",
    "description": "Delete Milestone",
    "parameters": [
      {
        "name": "milestonePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Milestone.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/milestones/{milestone-public-id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestone",
    "typeScriptTag": "milestone",
    "description": "Get Milestone",
    "parameters": [
      {
        "name": "milestonePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Milestone.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Milestone is a collection of Epics that represent a release or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/milestones/{milestone-public-id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Milestone",
    "typeScriptTag": "milestone",
    "description": "Update Milestone",
    "parameters": [
      {
        "name": "milestonePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Milestone.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "after_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Milestone is a collection of Epics that represent a release or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/milestones/{milestone-public-id}/epics",
    "method": "listMilestoneEpics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "List Milestone Epics",
    "parameters": [
      {
        "name": "milestonePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Milestone.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/objectives",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objective",
    "typeScriptTag": "objective",
    "description": "List Objectives",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/objectives",
    "method": "createNewObjective",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Objective",
    "typeScriptTag": "objective",
    "description": "Create Objective",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "An Objective is a collection of Epics that represent a release or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/objectives/{objective-public-id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Objective",
    "typeScriptTag": "objective",
    "description": "Delete Objective",
    "parameters": [
      {
        "name": "objectivePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Objective.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/objectives/{objective-public-id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objective",
    "typeScriptTag": "objective",
    "description": "Get Objective",
    "parameters": [
      {
        "name": "objectivePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Objective.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Objective is a collection of Epics that represent a release or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/objectives/{objective-public-id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Objective",
    "typeScriptTag": "objective",
    "description": "Update Objective",
    "parameters": [
      {
        "name": "objectivePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Objective.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "after_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An Objective is a collection of Epics that represent a release or some other large initiative that you are working on."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/objectives/{objective-public-id}/epics",
    "method": "listObjectiveEpics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "List Objective Epics",
    "parameters": [
      {
        "name": "objectivePublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Objective.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/projects",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "List Projects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/projects",
    "method": "createShortcutProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Create Project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "iteration_length",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "abbreviation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/projects/{project-public-id}",
    "method": "deleteProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Delete Project",
    "parameters": [
      {
        "name": "projectPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Project.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/projects/{project-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Get Project",
    "parameters": [
      {
        "name": "projectPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Project.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/projects/{project-public-id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "Update Project",
    "parameters": [
      {
        "name": "projectPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Project.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "days_to_thermometer",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_thermometer",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "abbreviation",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/projects/{project-public-id}/stories",
    "method": "listStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project",
    "typeScriptTag": "project",
    "description": "List Stories",
    "parameters": [
      {
        "name": "projectPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Project.",
        "example": 0
      },
      {
        "name": "includes_description",
        "schema": "boolean",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/repositories",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repository",
    "typeScriptTag": "repository",
    "description": "List Repositories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/repositories/{repo-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Repository",
    "typeScriptTag": "repository",
    "description": "Get Repository",
    "parameters": [
      {
        "name": "repoPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Repository.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Repository refers to a VCS repository."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/search",
    "method": "epicsAndStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_types",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the multi-entity search query."
      },
      {
        "statusCode": "400",
        "description": "Error returned when total maximum supported results have been reached."
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/search/epics",
    "method": "getEpics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Epic",
    "typeScriptTag": "epic",
    "description": "Search Epics",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_types",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the Epic search query."
      },
      {
        "statusCode": "400",
        "description": "Error returned when total maximum supported results have been reached."
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/search/iterations",
    "method": "iterations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search Iterations",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_types",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the Iteration search query."
      },
      {
        "statusCode": "400",
        "description": "Error returned when total maximum supported results have been reached."
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/search/milestones",
    "method": "milestones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search Milestones",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_types",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the Objective search query."
      },
      {
        "statusCode": "400",
        "description": "Error returned when total maximum supported results have been reached."
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/search/objectives",
    "method": "objectives",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search Objectives",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_types",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the Objective search query."
      },
      {
        "statusCode": "400",
        "description": "Error returned when total maximum supported results have been reached."
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/search/stories",
    "method": "storiesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search Stories",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "page_size",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "detail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entity_types",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the Story search query."
      },
      {
        "statusCode": "400",
        "description": "Error returned when total maximum supported results have been reached."
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Story",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "story_links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "story_type",
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
        "name": "move_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "comments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "epic_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "story_template_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "iteration_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "tasks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_state_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "estimate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "project_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "linked_file_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/bulk",
    "method": "deleteMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Delete Multiple Stories",
    "parameters": [
      {
        "name": "story_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/bulk",
    "method": "createMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Multiple Stories",
    "parameters": [
      {
        "name": "stories",
        "schema": "array",
        "required": true,
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/bulk",
    "method": "updateMultiple",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Update Multiple Stories",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "story_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "story_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "move_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "epic_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "external_links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "iteration_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_state_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "estimate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "after_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "project_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "labels_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids_add",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/from-template",
    "method": "createFromTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Story From Template",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "story_links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_links_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "story_type",
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
        "name": "move_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_ids_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "file_ids_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "epic_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "story_template_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STORY_TEMPLATE_ID"
      },
      {
        "name": "external_links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "linked_file_ids_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "iteration_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "tasks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labels_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_state_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "estimate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "project_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "linked_file_ids_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "linked_file_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels_remove",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids_add",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_links_remove",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/search",
    "method": "storiesOld",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search Stories (https://developer.shortcut.com",
    "parameters": [
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "story_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "epic_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "project_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updated_at_end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completed_at_end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow_state_types",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deadline_end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at_start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "epic_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "label_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "iteration_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "label_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow_state_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "iteration_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created_at_end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deadline_start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includes_description",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "estimate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "project_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "completed_at_start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at_start",
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
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Delete Story",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Get Story",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Update Story",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of this story.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pull_request_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "story_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "move_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "completed_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "epic_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "external_links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "branch_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "commit_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "requested_by_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "iteration_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "started_at_override",
        "schema": "string",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow_state_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "follower_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "estimate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "after_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "project_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "linked_file_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deadline",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Stories are the standard unit of work in Shortcut and represent individual features, bugs, and chores."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "List Story Comment",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Story Comment",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      },
      {
        "name": "author_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blocker",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "unblocks_parent",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Comment is any note added within the Comment field of a Story."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Delete Story Comment",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
    "method": "getComment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Get Story Comment",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Comment is any note added within the Comment field of a Story."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
    "method": "updateCommentText",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Update Story Comment",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment",
        "example": 0
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Comment is any note added within the Comment field of a Story."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
    "method": "deleteReaction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Delete Story Reaction",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      },
      {
        "name": "emoji",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMOJI"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
    "method": "addReaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Story Reaction",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Comment is in.",
        "example": 0
      },
      {
        "name": "commentPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Comment.",
        "example": 0
      },
      {
        "name": "emoji",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMOJI"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Story History",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Task",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Story that the Task will be in.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "complete",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A Task on a Story."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
    "method": "removeTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Delete Task",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Story this Task is associated with.",
        "example": 0
      },
      {
        "name": "taskPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Task.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
    "method": "getTaskInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Get Task",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Story this Task is associated with.",
        "example": 0
      },
      {
        "name": "taskPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Task.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Task on a Story."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Update Task",
    "parameters": [
      {
        "name": "storyPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the parent Story.",
        "example": 0
      },
      {
        "name": "taskPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the Task you wish to update.",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "complete",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "before_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "after_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Task on a Story."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/story-links",
    "method": "createLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Create Story Link",
    "parameters": [
      {
        "name": "verb",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERB"
      },
      {
        "name": "subject_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "object_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example \"story 5 blocks story 6\"."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/story-links/{story-link-public-id}",
    "method": "unlinkRelationship",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Delete Story Link",
    "parameters": [
      {
        "name": "storyLinkPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Story Link.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/story-links/{story-link-public-id}",
    "method": "getRelationship",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Get Story Link",
    "parameters": [
      {
        "name": "storyLinkPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Story Link.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example \"story 5 blocks story 6\"."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/story-links/{story-link-public-id}",
    "method": "updateLinkRelationship",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Story",
    "typeScriptTag": "story",
    "description": "Update Story Link",
    "parameters": [
      {
        "name": "storyLinkPublicId",
        "schema": "integer",
        "required": true,
        "description": "The unique ID of the Story Link.",
        "example": 0
      },
      {
        "name": "verb",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "object_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject -> link -> object`, or for example \"story 5 blocks story 6\"."
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/workflows",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "List Workflows",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  },
  {
    "url": "/api/v3/workflows/{workflow-public-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow",
    "typeScriptTag": "workflow",
    "description": "Get Workflow",
    "parameters": [
      {
        "name": "workflowPublicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Workflow.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI. "
      },
      {
        "statusCode": "400",
        "description": "Schema mismatch"
      },
      {
        "statusCode": "404",
        "description": "Resource does not exist"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Shortcut API"
      apiBaseUrl="https://api.app.shortcut.com"
      apiVersion="3.0"
      endpoints={72}
      sdkMethods={123}
      schemas={203}
      parameters={496}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shortcut/openapi.yaml"
      developerDocumentation="developer.shortcut.com"
    />
  );
}
  