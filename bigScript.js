function validate(btnId){
           
            switch(btnId){
                case "j_id0:form:orgBtn":
                    return validateOrg();
                    break;
                case "j_id0:form:comBtn":
                    return validateCom();
                    break;
                case "j_id0:form:contactBtn":
                    return validateContact();
                    break;
                case "j_id0:form:projectBtn":
                    return validateProject();
                    break;
                case "j_id0:form:fundBtn":
                    return validateFund();
                    break;
                case "j_id0:form:dateBtn":
                    return validateDates();
                    break;
                case "j_id0:form:outcomesBtn":
                    return validateOutcomes();
                    break;
                    
                case "j_id0:form:submit":
                    return validateSubmit();
                    break;
                default:
                    alert("Undefined action");
                    
            }
            return false;
        }
        
        function validateOrg(){
            alert("orgBtn");
            return true;
        }
        function validateCom(){
            alert("comBtn");
            return true;
        }
        function validateContact(){
            alert("contactBtn");
            return true;
        }
        function validateProject(){
            alert("projectBtn");
            return true;
        }
        function validateFund(){
            alert("fundBtn");
            return true;
        }
        function validateDates(){
            alert('hi');
        }
        function validateOutcomes(){
            alert("outcomesBtn");
            return true;
        }
        function validateSubmit(){
            var chkBx= document.getElementById("j_id0:form:chkBx").checked;
            if(chkBx){
                alert("Checked");
                return true;
            }
            else
                alert("Please, click on the checkbox to proceed");
            return false;
        }
        function redirect1(){
            alert("Redirecting to Login Page...");
            return true;
        }
        function disableOrgTab(){
            document.getElementById("j_id0:form:orgNm").disbaled=true;
        }
        function getId(id){
            alert("id-> "+id);
        }
        function disableTab(){
            alert('Hi ');
            if(document.getElementById("j_id0:form:orgNm").value!==""){
                document.getElementById("j_id0:form:orgNm").disabled=true;
            }
        }
