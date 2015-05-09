<script type="text/javascript">
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
            return true;
        }
        function validateCom(){
            return true;
        }
        function validateContact(){
            return true;
        }
        function validateProject(){
            return true;
        }
        function validateFund(){
            return true;
        }
        function validateDates(){
            return true;
        }
        function validateOutcomes(){
            return true;
        }
        function validateSubmit(){
            var chkBx= document.getElementById("j_id0:form:chkBx").checked;
            if(chkBx){
                return true;
            }
            else
                alert("Please, confirm to proceed");
            return false;
        }
        function enableCR(){
            document.getElementById("capital").className='unhide';
            document.getElementById("revenue").className='unhide';
        }
        function redirect1(){
            alert("Redirecting to Login Page...");
            return true;
        }
        function getId(id){
            alert("id-> "+id);
        }
    </script>
