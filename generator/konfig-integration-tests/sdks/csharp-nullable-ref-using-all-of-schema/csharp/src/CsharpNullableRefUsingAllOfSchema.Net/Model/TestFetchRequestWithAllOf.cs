/*
 * csharp-nullable-ref-using-all-of-schema API
 *
 * A simple API based for testing csharp-nullable-ref-using-all-of-schema.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = CsharpNullableRefUsingAllOfSchema.Net.Client.OpenAPIDateConverter;

namespace CsharpNullableRefUsingAllOfSchema.Net.Model
{
    /// <summary>
    /// TestFetchRequestWithAllOf
    /// </summary>
    [DataContract(Name = "TestFetchRequestWithAllOf")]
    public partial class TestFetchRequestWithAllOf : IEquatable<TestFetchRequestWithAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TestFetchRequestWithAllOf" /> class.
        /// </summary>
        /// <param name="input">input.</param>
        public TestFetchRequestWithAllOf(double? input = default(double?))
        {
            this.Input = input;
        }

        /// <summary>
        /// Gets or Sets Input
        /// </summary>
        [DataMember(Name = "input", EmitDefaultValue = true)]
        public double? Input { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TestFetchRequestWithAllOf {\n");
            sb.Append("  Input: ").Append(Input).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as TestFetchRequestWithAllOf);
        }

        /// <summary>
        /// Returns true if TestFetchRequestWithAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of TestFetchRequestWithAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TestFetchRequestWithAllOf input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Input == input.Input ||
                    (this.Input != null &&
                    this.Input.Equals(input.Input))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Input != null)
                {
                    hashCode = (hashCode * 59) + this.Input.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
