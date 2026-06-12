import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimtenantApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimtenantApi';

        displayName = 'Azure Apimanagement Apimtenant API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimtenant/azure-apimanagement-apimtenant.png', dark: 'file:../nodes/AzureApimanagementApimtenant/azure-apimanagement-apimtenant.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimtenant API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
