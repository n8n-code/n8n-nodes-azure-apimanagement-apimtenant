import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimtenant implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimtenant',
                name: 'N8nDevAzureApimanagementApimtenant',
                icon: { light: 'file:./azure-apimanagement-apimtenant.png', dark: 'file:./azure-apimanagement-apimtenant.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Azure API Management tenant properties and configuration.',
                defaults: { name: 'Azure Apimanagement Apimtenant' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimtenantApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
