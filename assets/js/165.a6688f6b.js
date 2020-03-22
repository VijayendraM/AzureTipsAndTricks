(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{451:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more :  "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/developer-best-practices-pod-security/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Azure Key Vault with FlexVolume"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This post was brought to you by "),a("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("@kumarallamraju"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"use-azure-key-vault-to-store-sensitive-data-and-access-from-kubernetes-pods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-key-vault-to-store-sensitive-data-and-access-from-kubernetes-pods","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Azure Key Vault to store sensitive data and access from Kubernetes Pods")]),e._v(" "),a("p",[e._v("As you develop and run applications in Azure Kubernetes Service (AKS), the security of Kubernetes pods is a key consideration. Your applications should be designed for the principle of least number of privileges required. Keeping private data secure is top of mind for your application. It's not a recommended practice to store sensitive data to your code or embed them in your container images. This approach would create a risk for exposure and limit the ability to rotate those credentials as the container images will need to be rebuilt.")]),e._v(" "),a("p",[e._v("Azure Key Vault FlexVolume for Kubernetes allows you to consume sensitive data from Azure Key Vault (like secrets, keys or certificates) and attach that data directly to Pods.  You can find the OSS project [here].(https://github.com/Azure/kubernetes-keyvault-flexvol) Azure Key Vault FlexVolume allows you to seamlessly integrate your key management systems with Kubernetes. Sensitive data like Secrets, keys, and certificates in a key management system become a volume accessible to pods. Once the volume is mounted, its data is available directly in the container filesystem for your application. Let's see it in action.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("p",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Pls make sure you have an AKS cluster provisioned and running before installing the Azure Key Vault FlexVolume. Instructions to create a new AKS cluster is documented "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"_1-deploy-key-vault-flexvolume-to-your-aks-cluster-with-this-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-key-vault-flexvolume-to-your-aks-cluster-with-this-command","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Deploy Key Vault FlexVolume to your AKS cluster with this command:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f https://raw.githubusercontent.com/Azure/kubernetes-keyvault-flexvol/master/deployment/kv-flexvol-installer.yaml\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-to-validate-key-vault-flexvolume-is-running-as-expected-run-the-following-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-to-validate-key-vault-flexvolume-is-running-as-expected-run-the-following-command","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. To validate Key Vault FlexVolume is running as expected, run the following command:")]),e._v(" "),a("p",[a("code",[e._v("kubectl get pods -n kv")])]),e._v(" "),a("h4",{attrs:{id:"_3-using-key-vault-flexvolume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-using-key-vault-flexvolume","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Using Key Vault FlexVolume")]),e._v(" "),a("p",[e._v("Key Vault FlexVolume offers four modes for accessing a Key Vault instance: Service Principal, Pod Identity, [VMSS User Assigned Managed Identity], [VMSS System Assigned Managed Identity].")]),e._v(" "),a("p",[e._v("In this blog we are going to focus on Option #1 - Service Principal")]),e._v(" "),a("h2",{attrs:{id:"create-a-service-principal-and-read-in-the-application-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-service-principal-and-read-in-the-application-id","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a service principal and read in the application ID")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SP=$(az ad sp create-for-rbac --output json)\nSP_ID=$(echo $SP | jq -r .appId)\nSP_PASSWORD=$(echo $SP | jq -r .password)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Add your service principal credentials as Kubernetes secrets accessible by the Key Vault FlexVolume driver.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create secret generic kvcreds --from-literal clientid=<SP_ID> --from-literal clientsecret=<SP_PASSWORD> --type=azure/kv\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"_4-ensure-this-service-principal-has-all-the-required-permissions-to-access-content-in-your-key-vault-instance-if-not-run-the-following-azure-cli-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ensure-this-service-principal-has-all-the-required-permissions-to-access-content-in-your-key-vault-instance-if-not-run-the-following-azure-cli-commands","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Ensure this service principal has all the required permissions to access content in your Key Vault instance. If not, run the following Azure CLI commands:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Assign Reader Role to the service principal for your keyvault\naz role assignment create --role Reader --assignee <principalid> --scope /subscriptions/<subscriptionid>/resourcegroups/<resourcegroup>/providers/Microsoft.KeyVault/vaults/<keyvaultname>\n\n\n# Assign key vault permissions to your service principal\naz keyvault set-policy -n $KV_NAME --key-permissions get --spn <YOUR SPN CLIENT ID>\naz keyvault set-policy -n $KV_NAME --secret-permissions get --spn <YOUR SPN CLIENT ID>\naz keyvault set-policy -n $KV_NAME --certificate-permissions get --spn <YOUR SPN CLIENT ID>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"_5-i-have-showed-an-example-below-that-mounts-the-volume-and-references-the-secrets-stored-on-azure-key-vault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-i-have-showed-an-example-below-that-mounts-the-volume-and-references-the-secrets-stored-on-azure-key-vault","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. I have showed an example below that mounts the volume and references the secrets stored on Azure Key Vault")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-flex-kv\nspec:\n  containers:\n  - name: nginx-flex-kv\n    image: nginx\n    volumeMounts:\n    - name: test\n      mountPath: /kvmnt\n      readOnly: true\n  volumes:\n  - name: test\n    flexVolume:\n      driver: "azure/kv"\n      secretRef:\n        name: kvcreds                             \n      options:\n        usepodidentity: "false"                  \n        keyvaultname: "testkeyvault"             \n        keyvaultobjectnames: "SQL-USR;SQL-PWD;SQL-FQDN;SQL-DBNAME"\n        keyvaultobjecttypes: "secret;secret;secret;secret"\n        keyvaultobjectaliases: "SQL_USER;SQL_PASSWORD;SQL_SERVER;SQL_DBNAME"\n        keyvaultobjectversions: "testversion"     \n        resourcegroup: "testresourcegroup"        \n        subscriptionid: "xxxx9280-xx-4xx183-xxxx-xxxxxx"  \n        tenantid: "xxxxdfaa-1983-4571-1111-123455d2537"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("Please make sure the Azure Key Vault was created ahead of time before deploying this application. In the above example I have a keyvault named "),a("code",[e._v("testkeyvault")]),e._v(", 4 secrets named "),a("code",[e._v("SQL-USR;SQL-PWD;SQL-FQDN;SQL-DBNAME")]),e._v(" and their values exists.")]),e._v(" "),a("h4",{attrs:{id:"_6-deploy-your-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-deploy-your-app","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. Deploy your app")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create -f deployment/nginx-flex-kv.yaml\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"_7-validate-the-pod-has-access-to-the-secret-from-key-vault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-validate-the-pod-has-access-to-the-secret-from-key-vault","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. Validate the pod has access to the secret from key vault:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec -it nginx-flex-kv ls /kvmnt\nSQL_USER;SQL_PASSWORD;SQL_SERVER;SQL_DBNAME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("This output confirm the kubernetes Pod was able to access the sensitive data from Azure Key Vault.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("With Azure Key Vault, you can store and regularly rotate secrets such as credentials, storage account keys, or certificates. You can integrate Azure Key Vault with an AKS cluster using a FlexVolume. The FlexVolume driver lets the AKS cluster natively retrieve credentials from Key Vault and securely provide them only to the requesting pod.")]),e._v(" "),a("h4",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/Azure/kubernetes-keyvault-flexvol?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Key Vault FlexVolume"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/key-vault/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),a("OutboundLink")],1)])])])])},[],!1,null,null,null);t.default=r.exports}}]);